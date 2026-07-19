import Button from "../../ui/Button/Button";
import { ArrowRight, Upload } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">

      <Button
        size="lg"
        rightIcon={<ArrowRight size={18} />}
      >
        Explore Prompts
      </Button>

      <Button
        size="lg"
        variant="outline"
        leftIcon={<Upload size={18} />}
      >
        Upload Prompt
      </Button>

    </div>
  );
}