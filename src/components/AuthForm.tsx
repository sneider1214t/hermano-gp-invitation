
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Heart, Bike } from 'lucide-react';

const AuthForm = () => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        toast({
          title: "¡Bienvenido!",
          description: "Has iniciado sesión correctamente.",
        });
      } else {
        toast({
          title: "Error",
          description: "Credenciales incorrectas. Por favor, regístrate primero.",
          variant: "destructive",
        });
      }
    } else {
      if (!formData.name.trim()) {
        toast({
          title: "Error",
          description: "Por favor ingresa tu nombre.",
          variant: "destructive",
        });
        return;
      }
      
      const success = register(formData.name, formData.email, formData.password);
      if (success) {
        toast({
          title: "¡Registro exitoso!",
          description: "Ahora puedes ver tu invitación especial.",
        });
      } else {
        toast({
          title: "Error",
          description: "Ocurrió un error durante el registro.",
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/10 animate-float">
          <Bike size={80} />
        </div>
        <div className="absolute bottom-20 right-10 text-primary/10 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={60} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-primary/5 animate-float" style={{ animationDelay: '2s' }}>
          <Bike size={120} />
        </div>
      </div>

      <Card className="w-full max-w-md glass-card animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bike className="h-8 w-8 text-primary animate-float" />
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-playfair golden-text">
            Invitación Especial
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            Una experiencia única te espera...
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Tu nombre</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full golden-gradient text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              {isLogin ? 'Acceder a mi invitación' : 'Crear mi acceso'}
            </Button>
          </form>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:text-primary/80 text-sm underline transition-colors duration-300"
            >
              {isLogin ? '¿Necesitas registrarte?' : '¿Ya tienes acceso?'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
