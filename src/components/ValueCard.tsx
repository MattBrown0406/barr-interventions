import { Heart, Shield, Star, Users } from "lucide-react";

const icons = {
  ethics: Shield,
  dignity: Star,
  respect: Users,
  love: Heart,
};

interface ValueCardProps {
  title: "ethics" | "dignity" | "respect" | "love";
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  const Icon = icons[title];
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="font-heading text-lg tracking-wider text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
