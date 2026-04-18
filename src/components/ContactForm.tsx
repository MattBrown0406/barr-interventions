import { useState } from "react";
import { Mail, Phone } from "lucide-react";
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
    <div className="space-y-5 max-w-lg">
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="tel:8177391349"
          className="flex items-center justify-center gap-2 rounded border border-border bg-card px-4 py-3 text-sm font-heading tracking-wider text-primary transition-colors hover:bg-secondary"
        >
          <Phone className="h-4 w-4" />
          Call 817.739.1349
        </a>
        <a
          href="mailto:katie@barrinterventions.com"
          className="flex items-center justify-center gap-2 rounded border border-border bg-card px-4 py-3 text-sm font-heading tracking-wider text-primary transition-colors hover:bg-secondary"
        >
          <Mail className="h-4 w-4" />
          Email Katie Directly
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          aria-label="Name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          autoComplete="name"
          className="bg-card border-border"
        />
        <Input
          type="email"
          aria-label="Email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          autoComplete="email"
          className="bg-card border-border"
        />
        <Input
          type="tel"
          aria-label="Phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          autoComplete="tel"
          className="bg-card border-border"
        />
        <Textarea
          aria-label="Message"
          placeholder="Tell us what is happening and the best way to reach you."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="bg-card border-border"
        />
        <Button type="submit" className="w-full font-heading tracking-wider">
          Open Confidential Email Draft
        </Button>
      </form>

      <p className="text-sm text-muted-foreground leading-relaxed">
        This form opens your email app with a draft addressed to katie@barrinterventions.com. For urgent situations or same-day needs, calling 817.739.1349 is the fastest option.
      </p>
    </div>
  );
};

export default ContactForm;
