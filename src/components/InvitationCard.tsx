
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Bike, Calendar, MapPin, Star, LogOut } from 'lucide-react';

const InvitationCard = () => {
  const { user, logout } = useAuth();

  const motoGPImages = [
    "https://images.unsplash.com/photo-1558618047-3c8c93d2c04a", // MotoGP racing
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f", // Motorcycle on track
    "https://images.unsplash.com/photo-1558618189-fbd6cd06bf6a", // Racing motorcycle
    "https://images.unsplash.com/photo-1567789884554-0b844b597180", // Motorcycle detail
    "https://images.unsplash.com/photo-1449426468208-9de52a4b540d"  // Racing scene
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 p-4 relative overflow-x-hidden">
      {/* Header with logout */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={logout}
          variant="outline"
          size="sm"
          className="glass-card hover:bg-destructive/20 transition-all duration-300"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Salir
        </Button>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-primary/5 animate-float">
          <Bike size={100} />
        </div>
        <div className="absolute top-1/4 right-20 text-primary/5 animate-float" style={{ animationDelay: '2s' }}>
          <Star size={80} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-primary/5 animate-float" style={{ animationDelay: '4s' }}>
          <Heart size={90} />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl pt-16">
        {/* Main invitation card */}
        <Card className="glass-card p-8 mb-8 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
              <Bike className="h-10 w-10 text-primary animate-float" />
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            
            <h1 className="text-5xl font-playfair golden-text mb-4 leading-tight">
              ¡Hola, {user?.name}!
            </h1>
            
            <div className="golden-gradient h-1 w-32 mx-auto rounded-full mb-6"></div>
            
            <p className="text-2xl text-foreground/90 font-light leading-relaxed">
              Tengo algo <span className="golden-text font-semibold">muy especial</span> que proponerte...
            </p>
          </div>

          {/* Main message */}
          <div className="text-center mb-12 space-y-6">
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Como sabes, hay pocos momentos en la vida que son realmente <span className="golden-text font-semibold">únicos e irrepetibles</span>. 
              Y creo que ha llegado el momento perfecto para vivir uno de esos momentos juntos.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
              <p className="text-2xl font-playfair golden-text mb-4">
                Te invito a ir conmigo al MotoGP
              </p>
              <div className="flex items-center justify-center space-x-4 text-foreground/70">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Una experiencia inolvidable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Juntos como hermanos</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Sé que ambos amamos la velocidad, la adrenalina y esos momentos de pura emoción. 
              Pero más que eso, <span className="golden-text font-semibold">valoro enormemente cada momento que compartimos</span> y 
              creo que esta sería una experiencia que recordaremos para siempre.
            </p>
          </div>

          {/* Photo gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-playfair golden-text text-center mb-8">
              Esto es lo que nos espera...
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motoGPImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={image}
                    alt={`MotoGP Experience ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Bike className="h-6 w-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube video section */}
          <div className="mb-12">
            <h3 className="text-2xl font-playfair golden-text text-center mb-8">
              Un mensaje especial para ti
            </h3>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card p-4">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/l30nGMNqYjQ"
                title="MotoGP - The Ultimate Racing Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Emotional closing message */}
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-8 rounded-2xl border border-secondary/30">
              <p className="text-xl font-playfair golden-text mb-4">
                "Los mejores momentos no se miden en tiempo, sino en las emociones que nos hacen sentir vivos"
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hermano, no hay nadie más con quien prefiera vivir esta aventura. 
                Tu compañía hace que cada experiencia sea más especial, más divertida y más significativa.
              </p>
              
              <div className="flex items-center justify-center space-x-2 mt-6">
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                <span className="text-foreground/70">Con todo mi cariño</span>
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              </div>
            </div>

            <div className="golden-gradient h-1 w-48 mx-auto rounded-full"></div>
            
            <p className="text-2xl font-playfair golden-text">
              ¿Te animas a vivir esta aventura conmigo?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Button className="golden-gradient text-black font-semibold px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                ¡Por supuesto que sí! 🏍️
              </Button>
              <Button variant="outline" className="glass-card hover:bg-secondary/20 px-8 py-3 text-lg transition-all duration-300">
                Necesito pensarlo 🤔
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-foreground/50 text-sm">
            Hecho con ❤️ especialmente para ti • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
