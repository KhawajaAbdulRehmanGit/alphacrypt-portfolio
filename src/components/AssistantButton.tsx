import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export const AssistantButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Our AI assistant feature will be available shortly.",
    });
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