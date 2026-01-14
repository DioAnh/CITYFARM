import { Plus, TrendingUp, Droplet, Sun, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import type { Screen, Plant } from '../App';

interface MyGardenScreenProps {
  onNavigate: (screen: Screen) => void;
  onPlantClick: (plant: Plant) => void;
}

export function MyGardenScreen({ onNavigate, onPlantClick }: MyGardenScreenProps) {
  const plants: Plant[] = [
    {
      id: '1',
      name: 'Cherry Tomato',
      type: 'Vegetable',
      plantedDate: '2026-01-01',
      daysGrowing: 11,
      harvestDays: 60,
      health: 'healthy',
      imageUrl: 'https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzY4MjMzNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      nextWatering: 'Today, 5:00 PM',
      nextFertilizing: 'In 3 days',
      progress: 18,
    },
    {
      id: '2',
      name: 'Green Lettuce',
      type: 'Vegetable',
      plantedDate: '2025-12-28',
      daysGrowing: 15,
      harvestDays: 35,
      health: 'healthy',
      imageUrl: 'https://images.unsplash.com/photo-1595735931739-0a99f2f0b0aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwZ3Jvd2luZyUyMHVyYmFufGVufDF8fHx8MTc2ODIzMzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      nextWatering: 'Tomorrow, 8:00 AM',
      nextFertilizing: 'In 5 days',
      progress: 43,
    },
    {
      id: '3',
      name: 'Fresh Mint',
      type: 'Herb',
      plantedDate: '2025-12-20',
      daysGrowing: 23,
      harvestDays: 45,
      health: 'warning',
      imageUrl: 'https://images.unsplash.com/photo-1633916872730-7199a52e483b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaGVyYiUyMHBsYW50fGVufDF8fHx8MTc2ODIzMzY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      nextWatering: 'Today, 3:00 PM',
      nextFertilizing: 'Tomorrow',
      progress: 51,
    },
    {
      id: '4',
      name: 'Thai Chili',
      type: 'Vegetable',
      plantedDate: '2026-01-05',
      daysGrowing: 7,
      harvestDays: 90,
      health: 'healthy',
      imageUrl: 'https://images.unsplash.com/photo-1761669411746-8f401c29e9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMHBsYW50fGVufDF8fHx8MTc2ODEzMjE2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      nextWatering: 'Today, 6:00 PM',
      nextFertilizing: 'In 7 days',
      progress: 8,
    },
  ];

  const stats = {
    totalPlants: plants.length,
    healthyPlants: plants.filter((p) => p.health === 'healthy').length,
    needsAttention: plants.filter((p) => p.health === 'warning').length,
    avgCareRate: 87,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <h2 className="text-xl font-bold text-gray-900">My Garden</h2>
        <p className="text-sm text-gray-600">{stats.totalPlants} plants growing</p>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-green-50 border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.healthyPlants}</p>
                <p className="text-xs text-gray-600">Healthy</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.needsAttention}</p>
                <p className="text-xs text-gray-600">Needs Care</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Care Rate */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Overall Care Rate</h3>
            <span className="text-2xl font-bold text-green-600">{stats.avgCareRate}%</span>
          </div>
          <Progress value={stats.avgCareRate} className="h-2" />
          <p className="text-xs text-gray-600 mt-2">
            Great job! Your plants are thriving 🌱
          </p>
        </Card>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Badge className="bg-green-600 text-white px-4 py-2 whitespace-nowrap">
            All Plants ({plants.length})
          </Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">
            Vegetables (3)
          </Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">
            Herbs (1)
          </Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">
            Ready to Harvest (0)
          </Badge>
        </div>

        {/* Plant Grid */}
        <div className="space-y-4">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onPlantClick(plant)}
            >
              <div className="relative h-48">
                <img
                  src={plant.imageUrl}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Health Badge */}
                <Badge
                  className={`absolute top-3 right-3 ${
                    plant.health === 'healthy'
                      ? 'bg-green-600'
                      : plant.health === 'warning'
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  } text-white`}
                >
                  {plant.health === 'healthy' ? '● Healthy' : plant.health === 'warning' ? '⚠ Warning' : '✕ Critical'}
                </Badge>

                {/* Plant Info Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold mb-1">{plant.name}</h3>
                  <p className="text-xs text-gray-200">{plant.type}</p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Growth Progress</span>
                    <span className="font-semibold text-gray-900">
                      Day {plant.daysGrowing} / {plant.harvestDays}
                    </span>
                  </div>
                  <Progress value={plant.progress} className="h-2" />
                </div>

                {/* Next Actions */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Next Water</p>
                      <p className="font-medium text-gray-900">{plant.nextWatering}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-600" />
                    <div>
                      <p className="text-xs text-gray-500">Fertilize</p>
                      <p className="font-medium text-gray-900">{plant.nextFertilizing}</p>
                    </div>
                  </div>
                </div>

                {/* Planted Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t">
                  <Calendar className="w-3 h-3" />
                  <span>Planted {new Date(plant.plantedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add Plant CTA */}
        <Card className="p-6 border-dashed border-2 border-gray-300 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Plus className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Add More Plants</h3>
          <p className="text-sm text-gray-600 mb-4">
            Scan your space to find more plants perfect for your garden
          </p>
          <Button
            onClick={() => onNavigate('scan')}
            className="bg-green-600 hover:bg-green-700"
          >
            Scan Space
          </Button>
        </Card>
      </div>
    </div>
  );
}
