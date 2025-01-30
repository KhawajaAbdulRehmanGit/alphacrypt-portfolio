import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { useEffect, useState } from 'react';

export const AssistantButton = () => {
  const { toast } = useToast();
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    // Add the ElevenLabs script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setIsWidgetLoaded(true);
    };
    
    document.body.appendChild(script);

    // Add the ElevenLabs widget element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'hN76B3FuVsr7vevAfXTS');
    document.body.appendChild(widget);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      const widgetElement = document.querySelector('elevenlabs-convai');
      if (widgetElement) {
        document.body.removeChild(widgetElement);
      }
    };
  }, []);

  const handleClick = () => {
    if (!isWidgetLoaded) {
      toast({
        title: "Loading...",
        description: "The AI assistant is being initialized.",
      });
      return;
    }
    
    // The widget will handle the interaction automatically when clicked
    const widgetElement = document.querySelector('elevenlabs-convai');
    if (widgetElement) {
      // @ts-ignore - custom element
      widgetElement.click();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all z-50 p-0 flex items-center justify-center"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};