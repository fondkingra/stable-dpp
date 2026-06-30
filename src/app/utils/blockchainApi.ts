const API_URL = import.meta.env.VITE_BLOCKCHAIN_API_URL || 'https://backend.52.172.89.46.nip.io';

export interface CreateDPPPayload {
  dppId: string;
  productName: string;
  productType: string;
  manufacturer: string;
  email: string;
  components: { id: string; name: string }[];
  environmentalData?: {
    co2Emissions?: string;
    waterUse?: string;
    fossilEnergy?: string;
    pefScore?: string;
    careInstructions?: string[];
    greenPractices?: string[];
  };
}

export interface CreateDPPResponse {
  success: boolean;
  dppId: string;
  transactionHash: string;
  transactionId: string;
  data: any;
  blockchain: {
    txId: string;
    timestamp: string;
    status: string;
  };
}

export const blockchainApi = {
  healthCheck: async () => {
    const res = await fetch(`${API_URL}/health`);
    return res.json();
  },

  createDPP: async (payload: CreateDPPPayload, imageFile?: File): Promise<CreateDPPResponse> => {
    const dppId = payload.dppId || `${payload.productType}-${Date.now()}`;

    const dppData = {
      dppId,
      id: dppId,
      productName: payload.productName,
      productDescription: `${payload.productType} - ${payload.productName}`,
      manufacturedBy: payload.manufacturer,
      manufacturer: payload.manufacturer,
      email: payload.email,
      countryOfOrigin: '',
      productionLocation: '',
      gtin: dppId,
      components: payload.components.map(c => ({
        componentName: c.name,
        dppId: '',
        weight: 0,
        sourceCountry: '',
      })),
      environmentalData: {
        energyTotal: payload.environmentalData?.fossilEnergy || 0,
        energyUnit: 'MJ',
        waterTotal: payload.environmentalData?.waterUse || 0,
        waterUnit: 'm³',
        wasteTotal: 0,
        wasteUnit: 'kg',
      },
      carbonFootprint: payload.environmentalData?.co2Emissions || 0,
      circularityData: {
        careInstructions: (payload.environmentalData?.careInstructions || []).join(', '),
        recyclingInstructions: (payload.environmentalData?.greenPractices || []).join(', '),
      },
      createdBy: payload.email,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(dppData));

    if (imageFile) {
      formData.append('image', imageFile);
    }

    const res = await fetch(`${API_URL}/dpp`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Network error' }));
      throw new Error(err.error || `Failed to create DPP (${res.status})`);
    }

    return res.json();
  },

  getDPP: async (dppId: string) => {
    const res = await fetch(`${API_URL}/dpp/${encodeURIComponent(dppId)}`);
    if (!res.ok) throw new Error(`DPP not found (${res.status})`);
    return res.json();
  },

  listDPPs: async () => {
    const res = await fetch(`${API_URL}/test`);
    if (!res.ok) throw new Error(`Failed to fetch DPPs (${res.status})`);
    return res.json();
  },
};
