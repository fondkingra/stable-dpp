import {
  ShieldCheckIcon,
  GlobeAltIcon,
  LockClosedIcon,
  BeakerIcon,
  ArchiveBoxIcon,
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  ChartBarIcon,
  ScaleIcon,
  CheckCircleIcon,
  CheckIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export const iconMap = {
  'shield-check': ShieldCheckIcon,
  'leaf': BeakerIcon,
  'lock': LockClosedIcon,
  'globe': GlobeAltIcon,
  'package': ArchiveBoxIcon,
  'clipboard': ClipboardDocumentListIcon,
  'mobile': DevicePhoneMobileIcon,
  'link': LinkIcon,
  'chart': ChartBarIcon,
  'chart-line': ChartBarIcon,
  'scale': ScaleIcon,
  'check-circle': CheckCircleIcon,
  'check': CheckIcon,
  'building': BuildingOfficeIcon,
  'store': BuildingStorefrontIcon,
  'factory': CogIcon,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, className = 'w-6 h-6', style }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} style={style} />;
}