import React from 'react';
//import './upgradebanner.css';

const UpgradeBannerStatic = props => {
    return (
      <div id="banner_outer_wrap">
        <div className="search_pg_bann " id="interrupt_banner">
          <div className="search_pg_banup"></div>
          <div className="bann_head">
            Connect with Matches directly
          </div>
          <div className="search_contact">
            <div className="search_mail">
              <div className="search_image">
                <div className="srch_mail_icon"></div>
              </div>
              <p className="search_txt">Send Email</p>
            </div>
            <div className="search_mid">
              <div className="search_image">
                <div className="srch_chat_icon"></div>
              </div>
              <p className="search_txt">Chat</p>
            </div>
            <div className="search_cal">
              <div className="search_image">
                <div className="srch_phn_icon"></div>
              </div>
              <p className="search_txt">Call / Send SMS</p>
            </div>
          </div>
          <div className="srch_dwngrad">
            <a href="https://www.shaadi.com/payment?source=listing_banner" className="srch_upgradebtn" id="banner_upgrade_btn" target="_blank">Upgrade Now</a>
            <p className="srch_benefithead">Other Benefits</p>
            <p className="srch_benefitlist">
              - View college and professional details<br />
              - Make your profile stand out in search results
            </p>
            <div className="srch_pg_bandwn"></div>
          </div>
          <div className="srch_close" id="banner_close"></div>
        </div>
        <div className="spacer_7"></div>
    </div>
    );
};

export default UpgradeBannerStatic;