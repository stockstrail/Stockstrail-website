"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";

const CommissionDisclosure = () => {
  return (
    <Layout>
      <SEO
        title="Stockstrail Commission Disclosure"
        description="Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings. We believe in complete transparency with zero hidden fees."
        url="/commission-disclosure"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stockstrail-bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <h1 className="font-product-sans text-4xl md:text-5xl font-bold gradient-text pb-2">
              Commission Disclosure
            </h1>
            <p className="text-white/80 text-xl font-light">
              Transparent Brokerage & Distribution Earnings
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 mb-6 text-white/75 leading-relaxed">
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Transparency</h2>
              <p className="mb-4">
                Transparency is at the heart of how Stockstrail operates. As an AMFI-registered Mutual Funds Distributor, our income comes solely through product distribution and brokerage, never through hidden fees.
              </p>
              <p>
                In line with regulatory guidelines from AMFI and SEBI, we proactively disclose our commission structure so that every client has a clear understanding of how we are compensated before they invest.
              </p>
            </div>

            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Brokerage Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Equity Brokerage</h3>
                  <p className="text-white/70 text-sm">
                    Commissions from equity transactions and the distribution of equity-linked Mutual Fund products.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Debt Brokerage</h3>
                  <p className="text-white/70 text-sm">
                    Commissions from debt funds and fixed-income product distribution, including bonds and government securities.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Commodity Brokerage</h3>
                  <p className="text-white/70 text-sm">
                    Earnings from commodity-linked investment solutions and services, applicable based on specific distributed products.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Hybrid Brokerage</h3>
                  <p className="text-white/70 text-sm">
                    Commissions earned for hybrid Mutual Fund products that combine equity and debt strategies to balance growth and stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">How does Stockstrail earn its income?</h3>
                  <p className="text-white/70 text-sm">Stockstrail is an AMFI-registered Mutual Funds Distributor and earns commissions solely through product distribution across Equity, Debt, Commodity, and Hybrid categories.</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Are there any hidden fees?</h3>
                  <p className="text-white/70 text-sm">No. Our income comes from disclosed commissions on distribution, not from hidden charges to clients.</p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h3 className="font-bold text-white mb-2">How can I check specific commission rates?</h3>
                  <p className="text-white/70 text-sm">Contact us directly, and our team will share the complete commission rate breakdown for any specific product.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="/lets-talk" className="px-6 py-3 bg-stockstrail-green-light text-black font-semibold rounded-lg hover:bg-stockstrail-green-accent transition-colors text-center shadow-[0_0_15px_rgba(0,255,151,0.2)]">
                  Contact Us for Rates
                </a>
                <a href="/CoC/revisedcoc.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all text-center">
                  View Code of Conduct
                </a>
              </div>
              <p className="text-sm text-white/50 italic border-t border-white/10 pt-4">
                Regulatory Note: This disclosure is provided for transparency in line with AMFI guidelines. It does not constitute investment advice. Commission rates may vary by product and are subject to change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommissionDisclosure;

