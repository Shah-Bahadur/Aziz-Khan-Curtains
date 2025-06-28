
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white bg-gradient-to-br from-champagne-500 to-champagne-900 bg-clip-text text-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Quote Today</h2>
          <p className="text-xl text-cyan-900 max-w-2xl mx-auto">
            Ready to transform your space? Contact us now for a free consultation and quick delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 text-cyan-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className=" bg-gradient-to-tr from-champagne-500 to-champagne-800 p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-cyan-900">+92 300 1234567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-tl from-champagne-500 to-champagne-800 p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="">info@azizkhanacurtains.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-bl from-champagne-500 to-champagne-800 p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="">Main Market, Lahore, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-champagne-500 to-champagne-800 p-3 rounded-full">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="">Mon-Sun: 8AM - 10PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-champagne-500/10 to-champagne-900/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2 text-cyan-900">Quick Service Guarantee</h4>
              <p className="text-champagne-900">
                Call now and get your curtains delivered within 24 hours! 
                Same-day installation available in Lahore.
              </p>
            </div>
          </div>

          <Card className="bg-white/10 text-cyan-900 border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Get Free Quote</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-luxury-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-champagne-500" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-luxury-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-champagne-500" 
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full p-3 border border-luxury-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-champagne-500">
                    <option>Blackout Curtains</option>
                    <option>Silk Drapes</option>
                    <option>Sheer Curtains</option>
                    <option>Roman Blinds</option>
                    <option>Custom Design</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-luxury-300 rounded-lg focus:ring-2 focus:ring-champagne-500 focus:border-champagne-500" 
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <a
                href="https://wa.me/971501234567?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20free%20home%20visit."
                target="_blank"
                rel="noopener noreferrer"
                >
            <Button 
    
            className=" w-full bg-gradient-to-r from-champagne-500 to-champagne-700 hover:from-champagne-700 hover:to-champagne-500 hover:text-xl text-gray-900 font-semibold px-3 rounded-lg text-lg transition-all duration-300 shadow-xl ">
              Get <u><b>Free</b></u> Quote Now
            </Button></a>
                {/* <Button className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3 text-lg">
                  Get Free Quote Now
                </Button> */}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
