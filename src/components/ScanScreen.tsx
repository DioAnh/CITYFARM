import { useState } from 'react';
import { Camera, X, Sparkles, Sun, CloudRain, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import type { Screen } from '../App';

interface ScanScreenProps {
  onNavigate: (screen: Screen) => void;
}

type ScanStep = 'camera' | 'analyzing' | 'results' | 'visualization';

export function ScanScreen({ onNavigate }: ScanScreenProps) {
  const [scanStep, setScanStep] = useState<ScanStep>('camera');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [capturedImage] = useState('https://images.unsplash.com/photo-1768118421324-8bae7959ad23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwZ2FyZGVuJTIwcGxhbnRzfGVufDF8fHx8MTc2ODIzMzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080');

  const handleCapture = () => {
    setScanStep('analyzing');
    
    // Simulate AI analysis with progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setAnalysisProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setScanStep('results'), 500);
      }
    }, 300);
  };

  const recommendations = [
    {
      id: '1',
      name: 'Green Lettuce',
      scientificName: 'Lactuca sativa',
      difficulty: 'Easy',
      harvestDays: '30-35 days',
      matchScore: 95,
      reason: 'Perfect for partial shade areas',
      imageUrl: 'https://images.unsplash.com/photo-1595735931739-0a99f2f0b0aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwZ3Jvd2luZyUyMHVyYmFufGVufDF8fHx8MTc2ODIzMzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      sunlight: 'Partial Shade',
      water: 'Daily',
      climate: 'HCMC Friendly',
    },
    {
      id: '2',
      name: 'Mint',
      scientificName: 'Mentha',
      difficulty: 'Easy',
      harvestDays: '40-50 days',
      matchScore: 92,
      reason: 'Thrives in humid environments',
      imageUrl: 'https://images.unsplash.com/photo-1633916872730-7199a52e483b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaGVyYiUyMHBsYW50fGVufDF8fHx8MTc2ODIzMzY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      sunlight: 'Partial Shade',
      water: 'Daily',
      climate: 'HCMC Friendly',
    },
    {
      id: '3',
      name: 'Cherry Tomato',
      scientificName: 'Solanum lycopersicum',
      difficulty: 'Medium',
      harvestDays: '60-80 days',
      matchScore: 78,
      reason: 'Needs more sunlight - place near window',
      imageUrl: 'https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzY4MjMzNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      sunlight: 'Full Sun',
      water: 'Every 2 days',
      climate: 'HCMC Friendly',
    },
  ];

  const spaceAnalysis = {
    lightIntensity: 'Moderate (40-60% sunlight)',
    availableArea: '2.5 m² (3 medium pots)',
    climate: 'HCMC - Hot & Humid',
    location: 'District 1, HCMC',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Scan Your Space</h2>
        <button
          onClick={() => onNavigate('home')}
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      {/* Camera View */}
      {scanStep === 'camera' && (
        <div className="relative h-[calc(100vh-80px)]">
          {/* Camera Placeholder */}
          <div className="absolute inset-0 bg-gray-900">
            <div className="relative h-full">
              {/* Simulated camera view */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4 px-6">
                  <Camera className="w-16 h-16 mx-auto opacity-50" />
                  <p className="text-lg font-medium">Point camera at your balcony or planting area</p>
                  <p className="text-sm text-gray-400">
                    AI will analyze light, space, and climate conditions
                  </p>
                </div>
              </div>

              {/* Camera Frame Guide */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 border-4 border-green-400 rounded-2xl opacity-50">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-green-400" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-green-400" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-green-400" />
                </div>
              </div>

              {/* Tips */}
              <div className="absolute bottom-32 left-0 right-0 px-6">
                <Card className="bg-black/50 backdrop-blur-sm border-white/20 p-4">
                  <div className="flex items-start gap-3 text-white">
                    <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Tips for best results:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Include windows for light analysis</li>
                        <li>• Capture full planting area</li>
                        <li>• Take photo during daytime</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Capture Button */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <button
              onClick={handleCapture}
              className="w-20 h-20 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-green-500" />
            </button>
          </div>
        </div>
      )}

      {/* Analyzing */}
      {scanStep === 'analyzing' && (
        <div className="p-6 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <div className="relative">
              <div className="w-full aspect-video rounded-2xl overflow-hidden">
                <img
                  src={capturedImage}
                  alt="Captured space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-green-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-3 animate-pulse" />
                  <p className="font-semibold text-lg">AI Analyzing...</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Progress value={analysisProgress} className="h-3" />
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${analysisProgress >= 30 ? 'text-green-600' : 'text-gray-300'}`} />
                  <span>Detecting light intensity...</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${analysisProgress >= 60 ? 'text-green-600' : 'text-gray-300'}`} />
                  <span>Measuring available area...</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${analysisProgress >= 90 ? 'text-green-600' : 'text-gray-300'}`} />
                  <span>Matching HCMC climate data...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {scanStep === 'results' && (
        <div className="pb-6">
          {/* Space Analysis Summary */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-lg font-bold">Space Analysis Complete</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Sun className="w-5 h-5 mb-2" />
                <p className="text-xs text-green-100">Light Level</p>
                <p className="font-semibold text-sm">Moderate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <MapPin className="w-5 h-5 mb-2" />
                <p className="text-xs text-green-100">Area Size</p>
                <p className="font-semibold text-sm">2.5 m²</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <CloudRain className="w-5 h-5 mb-2" />
                <p className="text-xs text-green-100">Climate</p>
                <p className="font-semibold text-sm">Hot & Humid</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 mb-2" />
                <p className="text-xs text-green-100">Capacity</p>
                <p className="font-semibold text-sm">3 plants</p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="px-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Perfect Plants for Your Space
              </h3>
              <p className="text-sm text-gray-600">
                AI-matched based on your conditions
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {recommendations.map((plant) => (
                <Card key={plant.id} className="overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={plant.imageUrl}
                        alt={plant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{plant.name}</h4>
                          <p className="text-xs text-gray-500 italic">{plant.scientificName}</p>
                        </div>
                        <Badge
                          className={`${
                            plant.matchScore >= 90
                              ? 'bg-green-100 text-green-700'
                              : plant.matchScore >= 80
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {plant.matchScore}% match
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3">{plant.reason}</p>
                      
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline" className="text-gray-600">
                          <Sun className="w-3 h-3 mr-1" />
                          {plant.sunlight}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          {plant.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          {plant.harvestDays}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => setScanStep('visualization')}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                See Your Future Garden (AI Preview)
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-700"
                size="lg"
              >
                Order Planting Kit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI Visualization */}
      {scanStep === 'visualization' && (
        <div className="pb-6">
          <div className="relative">
            <div className="w-full aspect-video">
              <img
                src={capturedImage}
                alt="Visualized garden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 right-4">
              <Card className="bg-black/50 backdrop-blur-sm border-white/20 p-3">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="font-medium">AI-Generated Garden Preview</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="px-6 pt-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Your Garden in 60 Days
              </h3>
              <p className="text-sm text-gray-600">
                This AI visualization shows how your space could look with recommended plants.
                Green overlay indicates optimal planting zones.
              </p>
            </div>

            <Card className="p-4 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Ready to start?</p>
                  <p className="text-sm text-gray-600">
                    Order a planting kit with recycled pots, soil, and seeds. Each kit includes a QR code for plant tracking.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Order Complete Starter Kit - ₫299,000
              </Button>
              <Button
                variant="outline"
                onClick={() => setScanStep('camera')}
                className="w-full"
              >
                Scan Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
