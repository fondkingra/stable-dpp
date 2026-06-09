import { SharedNav } from './SharedNav';
import { updateSEO } from '../utils/seo';
import { useEffect } from 'react';

export function ComingSoonPage() {
  useEffect(() => {
    updateSEO('comingSoon');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SharedNav />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're working hard to bring you something amazing. This feature will be available soon!
            </p>
            <div className="flex justify-center">
              <div className="animate-pulse flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animation-delay-200"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animation-delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}