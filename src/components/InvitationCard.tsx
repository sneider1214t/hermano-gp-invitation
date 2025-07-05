
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Bike, Calendar, MapPin, Star, LogOut, Zap, Flame, Trophy } from 'lucide-react';

const InvitationCard = () => {
  const { user, logout } = useAuth();

  const motoGPImages = [
    "/lovable-uploads/036ad347-fca6-4dac-8c62-6232ff672e18.png",
    "/lovable-uploads/6941bd0a-12c0-4bc1-bd2d-62fc6d7cdad7.png",
    "/lovable-uploads/b8dbfe28-fde8-427a-ab80-02b5e924d18c.png",
    "/lovable-uploads/d4dca1af-7d19-4904-a985-525f8e2b12c1.png",
    "/lovable-uploads/295231ba-736b-485c-834b-d319f0c5b1d9.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-4 relative overflow-hidden animate-pulse">
      {/* Crazy animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-spin"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-35 animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
        
        {/* Racing lines effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent -skew-y-12 animate-bounce"></div>
      </div>

      {/* Floating crazy elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-cyan-400 animate-spin">
          <Zap size={120} />
        </div>
        <div className="absolute top-1/4 right-20 text-yellow-400 animate-bounce" style={{ animationDelay: '1s' }}>
          <Flame size={100} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-pink-400 animate-pulse" style={{ animationDelay: '2s' }}>
          <Trophy size={110} />
        </div>
        <div className="absolute top-2/3 right-1/3 text-green-400 animate-spin" style={{ animationDelay: '3s' }}>
          <Star size={90} />
        </div>
      </div>

      {/* Header with crazy logout */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={logout}
          variant="outline"
          size="sm"
          className="bg-gradient-to-r from-red-500 to-pink-500 border-none text-white hover:from-red-600 hover:to-pink-600 shadow-2xl shadow-red-500/50 animate-pulse transform hover:scale-110 transition-all duration-300"
        >
          <LogOut className="h-4 w-4 mr-2 animate-spin" />
          Salir
        </Button>
      </div>

      <div className="container mx-auto max-w-6xl pt-16 relative z-10">
        {/* Insane main card */}
        <Card className="bg-gradient-to-br from-black/80 via-purple-900/80 to-pink-900/80 backdrop-blur-2xl border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 p-8 mb-8 animate-scale-in rounded-3xl relative overflow-hidden">
          
          {/* Card internal effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-yellow-500 via-pink-500 to-purple-500 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 via-yellow-500 to-cyan-500 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Crazy header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Heart className="h-12 w-12 text-red-500 animate-pulse" />
                <Bike className="h-16 w-16 text-cyan-400 animate-bounce" />
                <Flame className="h-14 w-14 text-yellow-400 animate-spin" />
                <Bike className="h-16 w-16 text-pink-400 animate-bounce" />
                <Heart className="h-12 w-12 text-red-500 animate-pulse" />
              </div>
              
              <h1 className="text-7xl font-playfair bg-gradient-to-r from-cyan-400 via-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight animate-pulse transform hover:scale-110 transition-all duration-300">
                ¡HOLA, {user?.name?.toUpperCase()}!
              </h1>
              
              <div className="bg-gradient-to-r from-cyan-500 via-yellow-500 via-pink-500 to-purple-500 h-2 w-64 mx-auto rounded-full mb-8 animate-pulse shadow-lg"></div>
              
              <p className="text-3xl bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent font-bold leading-relaxed animate-fade-in">
                Tengo algo <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-black text-4xl animate-pulse">INCREÍBLEMENTE ÉPICO</span> que proponerte...
              </p>
            </div>

            {/* Crazy main message */}
            <div className="text-center mb-12 space-y-8">
              <p className="text-2xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-relaxed max-w-4xl mx-auto animate-fade-in">
                Hermano, prepárate porque esto va a ser <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-black text-3xl animate-bounce">¡LA LOCURA TOTAL!</span> 
                Ha llegado el momento de vivir la experiencia más salvaje de nuestras vidas.
              </p>
              
              <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl p-8 rounded-3xl border-2 border-gradient-to-r border-cyan-400 shadow-2xl shadow-purple-500/50 animate-scale-in transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Zap className="h-8 w-8 text-yellow-400 animate-spin" />
                  <p className="text-4xl font-playfair bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent font-black animate-pulse">
                    ¡VAMOS AL MOTOGP!
                  </p>
                  <Flame className="h-8 w-8 text-red-500 animate-bounce" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 rounded-2xl border border-purple-400 animate-pulse">
                    <Calendar className="h-6 w-6 text-cyan-400 animate-spin" />
                    <span className="text-cyan-200 font-bold">ADRENALINA PURA</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 p-4 rounded-2xl border border-cyan-400 animate-pulse">
                    <MapPin className="h-6 w-6 text-yellow-400 animate-bounce" />
                    <span className="text-yellow-200 font-bold">HERMANOS FOREVER</span>
                  </div>
                </div>
              </div>

              <p className="text-xl bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent leading-relaxed max-w-3xl mx-auto animate-fade-in">
                No solo amamos la velocidad y la locura, sino que <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-black text-2xl animate-pulse">CADA MOMENTO CONTIGO ES ÉPICO</span> y 
                esta experiencia será TAN SALVAJE que la recordaremos por el resto de nuestras vidas.
              </p>
            </div>

            {/* Insane photo gallery */}
            <div className="mb-12">
              <h3 className="text-4xl font-playfair bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent text-center mb-8 font-black animate-bounce">
                🏍️ ¡ESTO ES LO QUE NOS ESPERA! 🔥
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {motoGPImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-3xl aspect-[4/3] animate-fade-in border-4 border-gradient-to-r from-cyan-400 via-yellow-400 to-pink-400 shadow-2xl shadow-purple-500/50 transform hover:scale-110 hover:rotate-2 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <img
                      src={image}
                      alt={`MotoGP Madness ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    
                    <div className="absolute bottom-4 left-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin">
                      <Bike className="h-8 w-8" />
                    </div>
                    <div className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                      <Flame className="h-8 w-8" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube section with updated video */}
            <div className="mb-12">
              <h3 className="text-4xl font-playfair bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center mb-8 font-black animate-pulse">
                🎥 UN MENSAJE SÚPER ESPECIAL 🎥
              </h3>
              
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-2xl p-6 border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl shadow-pink-500/50 animate-scale-in transform hover:scale-105 transition-all duration-300">
                <iframe
                  className="w-full h-full rounded-2xl border-2 border-cyan-400"
                  src="https://www.youtube.com/embed/7CyyNhO-Uu4"
                  title="MotoGP - Racing Experience"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Emotional closing with maximum craziness */}
            <div className="text-center space-y-8">
              <div className="bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-cyan-500/30 backdrop-blur-2xl p-10 rounded-3xl border-4 border-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 shadow-2xl shadow-purple-500/50 animate-scale-in transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <Star className="h-10 w-10 text-yellow-400 animate-spin" />
                    <p className="text-3xl font-playfair bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-black animate-pulse">
                      "LA VIDA ES DEMASIADO CORTA PARA NO VIVIRLA AL MÁXIMO"
                    </p>
                    <Star className="h-10 w-10 text-yellow-400 animate-spin" />
                  </div>
                  
                  <p className="text-2xl bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent leading-relaxed font-bold animate-fade-in">
                    Hermano, NO HAY NADIE MÁS con quien prefiera vivir esta SÚPER AVENTURA ÉPICA. 
                    Tu compañía hace que cada momento sea más SALVAJE, más DIVERTIDO y MÁS SIGNIFICATIVO.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 mt-8">
                    <Heart className="h-8 w-8 text-red-500 animate-pulse" />
                    <Flame className="h-8 w-8 text-yellow-400 animate-bounce" />
                    <span className="text-2xl bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent font-black">CON TODO MI AMOR DE HERMANO</span>
                    <Flame className="h-8 w-8 text-yellow-400 animate-bounce" />
                    <Heart className="h-8 w-8 text-red-500 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 via-yellow-500 via-pink-500 to-purple-500 h-3 w-96 mx-auto rounded-full animate-pulse shadow-2xl"></div>
              
              <p className="text-5xl font-playfair bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-black animate-bounce">
                ¿TE ANIMAS A ESTA LOCURA CONMIGO? 🏍️💨
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-12">
                <Button className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 text-white font-black px-12 py-6 text-2xl hover:from-green-600 hover:via-yellow-600 hover:to-red-600 shadow-2xl shadow-green-500/50 animate-bounce transform hover:scale-125 transition-all duration-300 rounded-2xl border-4 border-yellow-400">
                  ¡SÍ! ¡VAMOS A ROMPERLA! 🚀🔥
                </Button>
                <Button variant="outline" className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl border-4 border-purple-400 text-white hover:from-purple-700/80 hover:to-pink-700/80 px-12 py-6 text-2xl font-bold shadow-2xl shadow-purple-500/50 animate-pulse transform hover:scale-110 transition-all duration-300 rounded-2xl">
                  Necesito procesar tanta épica 🤯
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Crazy footer */}
        <div className="text-center py-8">
          <p className="text-lg bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-bold animate-pulse">
            Hecho con 🔥❤️🏍️ especialmente para el mejor hermano del mundo • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
