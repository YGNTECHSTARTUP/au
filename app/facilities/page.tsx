"use client"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import {
  MapPin,
  Home,
  Building,
  BookOpen,
  PlusSquare,
  Pill,
  BookText
} from "lucide-react"
import clsx from "clsx" // Make sure clsx is installed for conditional classes

export default function AccommodationFacilities() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<keyof typeof accommodations>("blueHomes")
 const accommodations = {
    blueHomes: {
      title: "Blue Homes",
      description: "Ram Nagar Location",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7600.85084797224!2d83.31303259235581!3d17.724582932884786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a394346f0a9c1c5%3A0x4608554bf84fcdd0!2sDepartment%20of%20Computer%20Science%20%26%20Systems%20Engineering%2C%20College%20of%20Engineering%2C%20AU%20North%20Campus%2C%20Andhra%20University%20North%20Campus%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!3m2!1d17.729842899999998!2d83.318083!4m5!1s0x3a39433173c949b5%3A0xaea0674e2a69b9f6!2sManapuram%20yellow%20Loan%20Bank%20Building%2C%20D.no%2010-54-34%2C%20opp.%20Sweet%20India%2C%20Ram%20Nagar%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530002!3m2!1d17.719257199999998!2d83.3122872!5e0!3m2!1sen!2sin!4v1744346718847!5m2!1sen!2sin",
      details: [
        {
          icon: <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Distance from college: Check with administration"
        },
        {
          icon: <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Dormitory: ₹250/- per person (Bed)"
        }
      ]
    },
    blueHomess: {
      title: "Blue Homes",
      description: "Allipuram Location",
      // <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15201.676472159701!2d83.29774425202017!3d17.7248803815334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3a394346f0a9c1c5%3A0x4608554bf84fcdd0!2sDepartment%20of%20Computer%20Science%20%26%20Systems%20Engineering%2C%20College%20of%20Engineering%2C%20AU%20North%20Campus%2C%20Andhra%20University%20North%20Campus%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!3m2!1d17.729842899999998!2d83.318083!4m5!1s0x3a39431ff30b8a53%3A0x16cd316cdf40bd5c!2sBlue%20Homes%2C%20Railway%20Quarters%2C%20Mahaarajupeta%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!3m2!1d17.7198469!2d83.2945881!5e0!3m2!1sen!2sin!4v1744556261712!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15201.676472159701!2d83.29774425202017!3d17.7248803815334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3a394346f0a9c1c5%3A0x4608554bf84fcdd0!2sDepartment%20of%20Computer%20Science%20%26%20Systems%20Engineering%2C%20College%20of%20Engineering%2C%20AU%20North%20Campus%2C%20Andhra%20University%20North%20Campus%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!3m2!1d17.729842899999998!2d83.318083!4m5!1s0x3a39431ff30b8a53%3A0x16cd316cdf40bd5c!2sBlue%20Homes%2C%20Railway%20Quarters%2C%20Mahaarajupeta%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!3m2!1d17.7198469!2d83.2945881!5e0!3m2!1sen!2sin!4v1744556261712!5m2!1sen!2sin",
      details: [
        {
          icon: <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Distance from college: Check with administration"
        },
        {
          icon: <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Dormitory: ₹250/- per person (Bed)"
        }
      ]
    },
    platinumJubilee: {
      title: "Platinum Jubilee",
      description: "AU South Campus",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7600.780980410652!2d83.31676129235598!3d17.726230682879397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3a394346f0a9c1c5%3A0x4608554bf84fcdd0!2sDepartment%20of%20Computer%20Science%20%26%20Systems%20Engineering%2C%20College%20of%20Engineering%2C%20AU%20North%20Campus%2C%20Andhra%20University%20North%20Campus%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!3m2!1d17.729842899999998!2d83.318083!4m5!1s0x3a394342df902d1d%3A0xe264f2ceedd9e7db!2sAndhra%20University%20South%20Campus%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!3m2!1d17.722830599999998!2d83.3241592!5e0!3m2!1sen!2sin!4v1744347307670!5m2!1sen!2sin",
      details: [
        {
          icon: <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Location: AU South Campus"
        },
        {
          icon: <Home className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />,
          text: "Price: Nearly ₹1000/- per room"
        }
      ]
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Accommodation & Facilities</h1>

      <Tabs defaultValue="accommodations" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
  <TabsTrigger
    value="accommodations"
    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-900 data-[state=active]:to-black data-[state=active]:text-yellow-500"
  >
    Accommodations
  </TabsTrigger>
  <TabsTrigger
    value="instructions"
    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-900 data-[state=active]:to-black data-[state=active]:text-yellow-500"
  >
    Instructions
  </TabsTrigger>
</TabsList>


        <TabsContent value="accommodations" className="space-y-6">
          <div className="w-full h-[400px] rounded-lg overflow-hidden border mb-6">
            <iframe
              src={accommodations[selectedAccommodation].mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(accommodations).map(([key, data]) => (
              <Card
                key={key}
                onClick={() => setSelectedAccommodation(key as keyof typeof accommodations)}
                className={clsx(
                  "cursor-pointer transition-all",
                  selectedAccommodation === key && "bg-gray-600 text-primary-foreground"
                )}
              >
                <CardHeader>
                  <CardTitle className={selectedAccommodation === key ? "flex items-center gap-2  text-primary-foreground" : "flex items-center gap-2 text-primary"} >
                    {key === "blueHomes" ? <Home className="h-5 w-5 " /> : <Building className="h-5 w-5 " />}
                    {data.title}
                  </CardTitle>
                  <CardDescription className={selectedAccommodation === key ? "text-primary-foreground" : ""}>
  {data.description}
</CardDescription>                </CardHeader>
                <CardContent className="space-y-2">
                  {data.details.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {item.icon}
                      <p>{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="instructions">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Important Instructions
              </CardTitle>
              <CardDescription>Please ensure you bring the following items</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <PlusSquare className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Bring an Extension box</span>
                </li>
                <li className="flex items-start gap-3">
                  <Pill className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Bring your daily wear medicines</span>
                </li>
                <li className="flex items-start gap-3">
                  <BookText className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>1 book and pen for noting the points</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
