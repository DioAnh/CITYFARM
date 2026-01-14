import { useState } from 'react';
import { ArrowLeft, Camera, Droplet, Sun, TrendingUp, Calendar, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import type { Plant } from '../App';

interface PlantDetailScreenProps {
  plant: Plant;
  onBack: () => void;
}

export function PlantDetailScreen({ plant, onBack }: PlantDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<'timeline' | 'care' | 'journal'>('timeline');

  const growthTimeline = [
    { day: 1, stage: 'Planted', date: plant.plantedDate, completed: true },
    { day: 7, stage: 'Sprouting', date: '2026-01-07', completed: plant.daysGrowing >= 7 },
    { day: 14, stage: 'Vegetative Growth', date: '2026-01-14', completed: plant.daysGrowing >= 14 },
    { day: 30, stage: 'Flowering', date: '2026-01-30', completed: false },
    { day: 60, stage: 'Harvest Ready', date: '2026-03-01', completed: false },
  ];

  const careHistory = [
    {
      id: '1',
      date: '2026-01-12',
      action: 'Watered',
      time: '8:00 AM',
      aiDetection: 'Soil moisture optimal',
      status: 'completed',
    },
    {
      id: '2',
      date: '2026-01-10',
      action: 'Watered',
      time: '8:00 AM',
      aiDetection: 'Plant health: Good',
      status: 'completed',
    },
    {
      id: '3',
      date: '2026-01-08',
      action: 'Fertilized',
      time: '9:00 AM',
      aiDetection: 'Growth rate improving',
      status: 'completed',
    },
    {
      id: '4',
      date: '2026-01-07',
      action: 'Photo Captured',
      time: '7:30 AM',
      aiDetection: 'Early sprouting detected',
      status: 'completed',
    },
  ];

  const journal = [
    {
      id: '1',
      date: '2026-01-11',
      photo: plant.imageUrl,
      aiAnalysis: {
        health: 'Healthy',
        leafColor: 'Vibrant green',
        issues: 'None detected',
        recommendation: 'Continue current care routine',
      },
    },
    {
      id: '2',
      date: '2026-01-08',
      photo: plant.imageUrl,
      aiAnalysis: {
        health: 'Healthy',
        leafColor: 'Good',
        issues: 'None detected',
        recommendation: 'Plant growing well',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-64">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>

        {/* Plant Name */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold">{plant.name}</h1>
            <Badge
              className={`${
                plant.health === 'healthy'
                  ? 'bg-green-600'
                  : plant.health === 'warning'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
              } text-white`}
            >
              {plant.health === 'healthy' ? '● Healthy' : plant.health === 'warning' ? '⚠ Warning' : '✕ Critical'}
            </Badge>
          </div>
          <p className="text-sm text-gray-200">{plant.type} • Day {plant.daysGrowing}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4 bg-gray-50 border-b">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">{plant.progress}%</p>
            <p className="text-xs text-gray-600">Progress</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{plant.daysGrowing}</p>
            <p className="text-xs text-gray-600">Days Growing</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{plant.harvestDays - plant.daysGrowing}</p>
            <p className="text-xs text-gray-600">Days to Harvest</p>
          </div>
        </div>
      </div>

      {/* Growth Progress Bar */}
      <div className="px-6 py-4 bg-white">
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-gray-600">Growth to Harvest</span>
          <span className="font-semibold text-gray-900">{plant.daysGrowing} / {plant.harvestDays} days</span>
        </div>
        <Progress value={plant.progress} className="h-3" />
      </div>

      {/* Next Care Actions */}
      <div className="px-6 py-4 bg-yellow-50 border-y border-yellow-200">
        <h3 className="font-semibold text-gray-900 mb-3">Upcoming Care</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Water Plant</p>
              <p className="text-sm text-gray-600">{plant.nextWatering}</p>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Done
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Add Fertilizer</p>
              <p className="text-sm text-gray-600">{plant.nextFertilizing}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex px-6">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'timeline'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'care'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            Care History
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'journal'
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-gray-500'
            }`}
          >
            Journal
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-6 space-y-4">
        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Growth Stages</h3>
            <div className="relative">
              {growthTimeline.map((stage, index) => (
                <div key={stage.day} className="flex gap-4 pb-6 last:pb-0 relative">
                  {/* Timeline Line */}
                  {index < growthTimeline.length - 1 && (
                    <div
                      className={`absolute left-5 top-12 w-0.5 h-full ${
                        stage.completed ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      stage.completed
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {stage.completed ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>

                  {/* Content */}
                  <Card className={`flex-1 p-4 ${stage.completed ? 'bg-green-50 border-green-200' : ''}`}>
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                      <Badge variant="outline" className="text-xs">
                        Day {stage.day}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(stage.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Care History Tab */}
        {activeTab === 'care' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Recent Activities</h3>
              <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                <Camera className="w-4 h-4 mr-2" />
                Log Care
              </Button>
            </div>
            <div className="space-y-3">
              {careHistory.map((entry) => (
                <Card key={entry.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{entry.action}</h4>
                        <span className="text-xs text-gray-500">{entry.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>{entry.aiDetection}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Journal Tab */}
        {activeTab === 'journal' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Growth Photos</h3>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Camera className="w-4 h-4 mr-2" />
                Add Photo
              </Button>
            </div>
            <div className="space-y-4">
              {journal.map((entry) => (
                <Card key={entry.id} className="overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={entry.photo}
                      alt={`Journal entry ${entry.date}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-900">
                        {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <Badge className="bg-green-100 text-green-700">
                        AI Analyzed
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health Status:</span>
                        <span className="font-medium text-green-600">{entry.aiAnalysis.health}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leaf Color:</span>
                        <span className="font-medium">{entry.aiAnalysis.leafColor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Issues:</span>
                        <span className="font-medium">{entry.aiAnalysis.issues}</span>
                      </div>
                      {entry.aiAnalysis.recommendation && (
                        <div className="pt-2 border-t">
                          <p className="text-gray-600 mb-1">AI Recommendation:</p>
                          <p className="text-gray-900 font-medium">{entry.aiAnalysis.recommendation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md px-6">
        <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg" size="lg">
          <Camera className="w-5 h-5 mr-2" />
          Capture Daily Photo
        </Button>
      </div>
    </div>
  );
}
