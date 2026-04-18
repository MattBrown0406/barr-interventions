import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        "",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:katie@barrinterventions.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app",
      description: "We prefilled an email draft so your message can be sent directly to Barr Interventions.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <Input
        aria-label="Name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="bg-card border-border"
      />
      <Input
        type="email"
        aria-label="Email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="bg-card border-border"
      />
      <Input
        type="tel"
        aria-label="Phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="bg-card border-border"
      />
      <Textarea
        aria-label="Message"
        placeholder="How can we help?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={5}
        className="bg-card border-border"
      />
      <Button type="submit" className="w-full font-heading tracking-wider">
        Email Barr Interventions
      </Button>
      <p className="text-sm text-muted-foreground">
        This form opens your email app with a draft addressed to katie@barrinterventions.com. For immediate help, call 512.402.5991.
      </p>
    </form>
  );
};

export default ContactForm;
