"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Package, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComponentTypes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("downloadable")

  const componentTypes = {
    downloadable: {
      icon: <Package className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#00bb77]" />,
      title: "Downloadable Components",
      description:
        "Pre-built packages, libraries, and modules that developers can download and incorporate into their codebase with a one-time payment.",
      features: [
        "Smart contract templates",
        "UI components for Stellar apps",
        "Payment modules",
        "Wallet integration tools",
        "Data visualization libraries",
      ],
      cta: "Browse Downloadable Components",
      payment: "One-time payment via crypto or fiat",
    },
    liveApi: {
      icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#Fa5478]" />,
      title: "Live API Components",
      description:
        "Hosted services that provide specific functionalities through API endpoints, accessible via subscription based on usage.",
      features: [
        "Transaction monitoring",
        "Analytics services",
        "Identity verification",
        "Price oracles",
        "Cross-chain bridges",
      ],
      cta: "Explore API Components",
      payment: "Subscription based on usage",
    },
  }

  return (
    <section id="components" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Component <span className="text-[#00bb77]">Types</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Seidar offers two distinct component types with different earning models for creators
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <Tabs defaultValue="downloadable" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-8 sm:mb-12 bg-white/5">
              <TabsTrigger
                value="downloadable"
                className={`data-[state=active]:bg-[#00bb77]/20 data-[state=active]:text-[#00bb77] data-[state=active]:shadow-none text-xs sm:text-sm`}
              >
                <Package className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Downloadable
              </TabsTrigger>
              <TabsTrigger
                value="liveApi"
                className={`data-[state=active]:bg-[#Fa5478]/20 data-[state=active]:text-[#Fa5478] data-[state=active]:shadow-none text-xs sm:text-sm`}
              >
                <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Live API
              </TabsTrigger>
            </TabsList>

            <div className="mt-6 sm:mt-8">
              {Object.entries(componentTypes).map(([key, component]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2">
                      <div
                        className={`rounded-full p-4 sm:p-6 inline-flex mb-4 sm:mb-6 ${
                          key === "downloadable" ? "bg-[#00bb77]/20" : "bg-[#Fa5478]/20"
                        }`}
                      >
                        {component.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{component.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{component.description}</p>

                      <div className="mb-4 sm:mb-6 py-2 px-3 sm:px-4 rounded-md bg-white/5 border border-white/10">
                        <p className="text-xs sm:text-sm font-medium text-gray-300">
                          <span className="text-white">Earning model:</span> {component.payment}
                        </p>
                      </div>

                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {component.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div
                              className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full mr-2 sm:mr-3 ${
                                key === "downloadable" ? "bg-[#00bb77]" : "bg-[#Fa5478]"
                              }`}
                            ></div>
                            <span className="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full sm:w-auto ${
                          key === "downloadable"
                            ? "bg-[#00bb77] hover:bg-[#00bb77]/80 shadow-md hover:shadow-lg hover:shadow-[#00bb77]/20 transition-all duration-300"
                            : "bg-[#Fa5478] hover:bg-[#Fa5478]/80 shadow-md hover:shadow-lg hover:shadow-[#Fa5478]/20 transition-all duration-300"
                        }`}
                      >
                        {component.cta}
                      </Button>
                    </div>

                    <div className="lg:w-1/2 w-full">
                      <div
                        className={`rounded-lg p-4 sm:p-6 border ${
                          key === "downloadable"
                            ? "border-[#00bb77]/30 bg-[#00bb77]/5"
                            : "border-[#Fa5478]/30 bg-[#Fa5478]/5"
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#Fa5478]"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#d7e464]"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00bb77]"></div>
                          </div>
                          <div className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-400">Component Example</div>
                        </div>

                        {key === "downloadable" && (
                          <div className="space-y-3 sm:space-y-4">
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-[#00bb77]">
                                npm install @stellar/payment-module
                              </code>
                            </div>
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-white">
                                <span className="text-[#d7e464]">import</span> {`{ StellarPayment }`}{" "}
                                <span className="text-[#d7e464]">from</span>{" "}
                                <span className="text-[#Fa5478]">'@stellar/payment-module'</span>;
                              </code>
                            </div>
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-white">
                                <span className="text-[#d7e464]">const</span> payment ={" "}
                                <span className="text-[#d7e464]">new</span> StellarPayment();
                                <br />
                                <span className="text-[#d7e464]">await</span> payment.initialize();
                                <br />
                                <span className="text-[#d7e464]">const</span> result ={" "}
                                <span className="text-[#d7e464]">await</span> payment.send({"{"}
                                <br />
                                &nbsp;&nbsp;destination: <span className="text-[#Fa5478]">'G...'</span>,
                                <br />
                                &nbsp;&nbsp;amount: <span className="text-[#Fa5478]">'100'</span>,
                                <br />
                                &nbsp;&nbsp;asset: <span className="text-[#Fa5478]">'XLM'</span>
                                <br />
                                {"}"});
                              </code>
                            </div>
                          </div>
                        )}

                        {key === "liveApi" && (
                          <div className="space-y-3 sm:space-y-4">
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-[#Fa5478]">
                                GET https://api.seidar.io/v1/analytics/transactions
                              </code>
                            </div>
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-white">
                                <span className="text-[#d7e464]">const</span> response ={" "}
                                <span className="text-[#d7e464]">await</span> fetch(
                                <span className="text-[#Fa5478]">
                                  'https://api.seidar.io/v1/analytics/transactions'
                                </span>
                                ,{"{"}
                                <br />
                                &nbsp;&nbsp;headers: {"{"}
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;'Authorization':{" "}
                                <span className="text-[#Fa5478]">'Bearer YOUR_SEIDAR_API_KEY'</span>
                                <br />
                                &nbsp;&nbsp;{"}"}
                                <br />
                                {"}"});
                                <br />
                                <span className="text-[#d7e464]">const</span> data ={" "}
                                <span className="text-[#d7e464]">await</span> response.json();
                              </code>
                            </div>
                            <div className="p-3 sm:p-4 rounded bg-white/10">
                              <code className="text-xs sm:text-sm text-gray-300">
                                // Response data
                                <br />
                                {`{ "transactions": [...], "metrics": {...}, "pagination": {...} }`}
                              </code>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
