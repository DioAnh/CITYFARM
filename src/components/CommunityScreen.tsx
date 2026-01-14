import { useState } from 'react';
import { Search, MapPin, Filter, ShoppingBag, MessageCircle, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import type { Screen, CommunityPost } from '../App';

interface CommunityScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function CommunityScreen({ onNavigate }: CommunityScreenProps) {
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [searchQuery, setSearchQuery] = useState('');

  const districts = [
    'All Districts',
    'District 1',
    'District 2',
    'District 3',
    'Binh Thanh',
    'Phu Nhuan',
    'Tan Binh',
  ];

  const posts: CommunityPost[] = [
    {
      id: '1',
      seller: {
        name: 'Nguyen Mai',
        avatar: 'https://images.unsplash.com/photo-1710563159982-5102e64ab55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZ2FyZGVuaW5nfGVufDF8fHx8MTc2ODIzMzY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        district: 'District 1',
        verifiedGrower: true,
      },
      plant: 'Fresh Green Lettuce',
      quantity: '10 heads',
      price: '₫50,000',
      imageUrl: 'https://images.unsplash.com/photo-1595735931739-0a99f2f0b0aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwZ3Jvd2luZyUyMHVyYmFufGVufDF8fHx8MTc2ODIzMzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Organic lettuce grown on my balcony. No pesticides. Ready to harvest!',
      postedTime: '2 hours ago',
      plantingLogs: 45,
    },
    {
      id: '2',
      seller: {
        name: 'Tran Minh',
        avatar: 'https://images.unsplash.com/photo-1710563159982-5102e64ab55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZ2FyZGVuaW5nfGVufDF8fHx8MTc2ODIzMzY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        district: 'District 2',
        verifiedGrower: true,
      },
      plant: 'Cherry Tomatoes',
      quantity: '2 kg',
      price: '₫80,000',
      imageUrl: 'https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzY4MjMzNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Sweet and organic cherry tomatoes. Perfect for salads. Fully documented growth.',
      postedTime: '5 hours ago',
      plantingLogs: 60,
    },
    {
      id: '3',
      seller: {
        name: 'Le Anh',
        avatar: 'https://images.unsplash.com/photo-1710563159982-5102e64ab55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZ2FyZGVuaW5nfGVufDF8fHx8MTc2ODIzMzY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        district: 'Binh Thanh',
        verifiedGrower: true,
      },
      plant: 'Fresh Mint',
      quantity: '5 bunches',
      price: '₫30,000',
      imageUrl: 'https://images.unsplash.com/photo-1633916872730-7199a52e483b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW50JTIwaGVyYiUyMHBsYW50fGVufDF8fHx8MTc2ODIzMzY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Aromatic Vietnamese mint. Great for cooking and tea. Grown in recycled bottles.',
      postedTime: '1 day ago',
      plantingLogs: 30,
    },
    {
      id: '4',
      seller: {
        name: 'Pham Thu',
        avatar: 'https://images.unsplash.com/photo-1710563159982-5102e64ab55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZ2FyZGVuaW5nfGVufDF8fHx8MTc2ODIzMzY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        district: 'District 3',
        verifiedGrower: true,
      },
      plant: 'Thai Chili Peppers',
      quantity: '500g',
      price: '₫60,000',
      imageUrl: 'https://images.unsplash.com/photo-1761669411746-8f401c29e9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsaSUyMHBlcHBlciUyMHBsYW50fGVufDF8fHx8MTc2ODEzMjE2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spicy and fresh Thai chilies. Perfect heat level. Verified organic growing process.',
      postedTime: '1 day ago',
      plantingLogs: 90,
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesDistrict =
      selectedDistrict === 'All Districts' || post.seller.district === selectedDistrict;
    const matchesSearch =
      searchQuery === '' ||
      post.plant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <h2 className="text-xl font-bold text-gray-900">Green Market</h2>
        <p className="text-sm text-gray-600">Local, fresh & verified produce</p>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for plants, vegetables, herbs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 h-12"
          />
        </div>

        {/* District Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filter by District</h3>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {districts.map((district) => (
              <Badge
                key={district}
                onClick={() => setSelectedDistrict(district)}
                className={`cursor-pointer whitespace-nowrap px-4 py-2 ${
                  selectedDistrict === district
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-300'
                }`}
              >
                {district}
              </Badge>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900 mb-1">100% Verified Growers</p>
              <p className="text-sm text-gray-600">
                All sellers have documented planting logs verified by AI. Buy local, buy fresh.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">{filteredPosts.length}</p>
            <p className="text-xs text-gray-600">Active Listings</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">120+</p>
            <p className="text-xs text-gray-600">Local Growers</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">4.8★</p>
            <p className="text-xs text-gray-600">Avg Rating</p>
          </Card>
        </div>

        {/* Marketplace Listings */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">
              Fresh Produce ({filteredPosts.length})
            </h3>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex gap-4 p-4">
                  {/* Product Image */}
                  <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.imageUrl}
                      alt={post.plant}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Seller Info */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img
                          src={post.seller.avatar}
                          alt={post.seller.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{post.seller.name}</span>
                      {post.seller.verifiedGrower && (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      )}
                    </div>

                    {/* Product Info */}
                    <h4 className="font-bold text-gray-900 mb-1">{post.plant}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.description}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{post.seller.district}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.postedTime}</span>
                      </div>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs px-2 py-0">
                        {post.plantingLogs} logs
                      </Badge>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-lg font-bold text-green-600">{post.price}</p>
                        <p className="text-xs text-gray-500">{post.quantity}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-600 text-green-600"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="px-4 py-2 bg-green-50 border-t border-green-200">
                  <div className="flex items-center gap-2 text-xs text-green-700">
                    <CheckCircle2 className="w-3 h-3" />
                    <span className="font-medium">
                      Growth verified • {post.plantingLogs} days documented with AI
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sell CTA */}
        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-2">Got Surplus Produce?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Share your harvest with neighbors. Your planting logs are automatically verified.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              List Your Produce
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
