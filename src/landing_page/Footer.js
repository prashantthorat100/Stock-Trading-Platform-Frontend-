import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#f3f0f0" }}>
      <div style={{ maxWidth: "1500px" }} className="container  border-top">
        <div style={{ marginLeft: "12%" }} className="row mt-4 ">
          {/* <div className="col"></div> */}
          <div className="col-md-3">
            <img
              style={{ width: "150px", margin: "20px auto 20px auto" }}
              alt="logo"
              src="media/images/logo.svg"
            />
            <p style={{ fontSize: "12px" }}>
              © 2010 - 2026, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
            <div className="socials fs-5 ">
              <div className="mb-3">
                <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mt-3 border-top">
                <div className="mt-3">
                  <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                  <a style={{ color: "GrayText", marginRight: "10px" }} href="">
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                </div>
              </div>

              <div style={{ marginRight: "10px" }} className="mt-4">
                <a>
                  <img
                    style={{ width: "120px", marginRight: "10px" }}
                    src="media\images\google-play-badge-light.svg"
                  ></img>
                </a>
                <a>
                  <img
                    style={{ width: "110px" }}
                    src="media\images\appstore-badge-light.svg"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 anchor">
            <p className="head">Account</p>
            <a className="anchor" href="">
              Open demat account
            </a>
            <br />
            <a className="anchor" href="">
              Minor demat account
            </a>
            <br />
            <a className="anchor" href="">
              NRI demat account
            </a>
            <br />
            <a className="anchor" href="">
              HUF demat account
            </a>
            <br />
            <a className="anchor" href="">
              Commodity
            </a>
            <br />
            <a className="anchor" href="">
              Dematerialisation
            </a>
            <br />
            <a className="anchor" href="">
              Fund transfer
            </a>
            <br />
            <a className="anchor" href="">
              MTF
            </a>
          </div>
          <div className="col-md-2 anchor">
            <p className="head">Supports</p>
            <a className="anchor" href="">
              Contact us
            </a>
            <br />
            <a className="anchor" href="">
              Support portal
            </a>
            <br />
            <a className="anchor" href="">
              How to file a complaint?
            </a>
            <br />
            <a className="anchor" href="">
              Status of your complaints
            </a>
            <br />
            <a className="anchor" href="">
              Bulletin
            </a>
            <br />
            <a className="anchor" href="">
              Circular
            </a>
            <br />
            <a className="anchor" href="">
              Z-Connect blog
            </a>
            <br />
            <a className="anchor" href="">
              Downloads
            </a>
          </div>
          <div className="col-md-2 anchor">
            <p className="head">Company</p>
            <a className="anchor" href="">
              About
            </a>
            <br />
            <a className="anchor" href="">
              Philosophy
            </a>
            <br />
            <a className="anchor" href="">
              Press & media
            </a>
            <br />
            <a className="anchor" href="">
              Careers
            </a>
            <br />
            <a className="anchor" href="">
              Zerodha Cares (CSR)
            </a>
            <br />
            <a className="anchor" href="">
              Zerodha.tech
            </a>
            <br />
            <a className="anchor" href="">
              Open source
            </a>
            <br />
            <a className="anchor" href="">
              Referral program
            </a>
            <br />
          </div>
          <div className="col-md-3 anchor">
            <p className="head">Quick Links</p>
            <a className="anchor" href="">
              Upcoming IPOs
            </a>
            <br />
            <a className="anchor" href="">
              Brokerage charges
            </a>
            <br />
            <a className="anchor" href="">
              Market holidays
            </a>
            <br />
            <a className="anchor" href="">
              Economic calendar
            </a>
            <br />
            <a className="anchor" href="">
              Calculators
            </a>
            <br />
            <a className="anchor" href="">
              Markets
            </a>
            <br />
            <a className="anchor" href="">
              Sectors
            </a>
            <br />
            <a className="anchor" href="">
              Gift Nifty
            </a>
          </div>
          {/* <div className="col"></div> */}
        </div>

        <div className="mt-5 p-5 text-muted " style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>

        <div className="anchor">
          <a className="anchor" style={{ marginLeft: "150px" }} href="">
            NSE{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            BSE{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            MCX{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            MSEI{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Terms & conditions{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Policies & procedures{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Privacy policy{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Disclosure{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            For investor's attention{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Investor charter{" "}
          </a>
          <a className="anchor" style={{ marginLeft: "20px" }} href="">
            Sitemap{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
