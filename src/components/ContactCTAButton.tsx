import { useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ContactCTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ContactCTAButton = ({
  children,
  className = "",
  onClick,
}: ContactCTAButtonProps) => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const businessPhone = "+971503634385";

  const handleWhatsApp = () => {
    window.location.href = "/contact-redirect?method=whatsapp";
    setShowContactDialog(false);
  };

  const handleDirectCall = () => {
    window.location.href = "/contact-redirect?method=call";
    setShowContactDialog(false);
  };

  const handleClick = () => {
    setShowContactDialog(true);
    onClick?.();
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>

      {/* Contact Choice Dialog */}
      <AlertDialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <AlertDialogContent className="bg-white border border-gray-200 rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-cormorant text-gray-900">
              How would you like to connect?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center py-4">
              <p className="text-2xl font-bold text-champagne-600 mb-2">
                +971-503-634-385
              </p>
              <p className="text-sm text-gray-600">
                Choose your preferred contact method
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg px-4 py-3 transition text-left"
            >
              <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">
                  Quick message & instant response
                </p>
              </div>
            </button>
            <button
              onClick={handleDirectCall}
              className="flex items-center justify-center gap-3 bg-champagne-50 hover:bg-champagne-100 border border-champagne-200 rounded-lg px-4 py-3 transition text-left"
            >
              <PhoneCall className="w-5 h-5 text-champagne-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Direct Call</p>
                <p className="text-sm text-gray-600">
                  Speak with our design expert now
                </p>
              </div>
            </button>
          </div>
          <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-900 border-0">
            Cancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ContactCTAButton;
