import PropTypes from 'prop-types';
import React from 'react';
import s from './styles';

const UpgradeBanner = props => {
    return (
      <s.UpgradeBanner>
        <s.Header>
          <s.Title>Connect with Matches directly</s.Title>
          <s.CloseBtn />
        </s.Header>
        <s.Benefits>
          <s.EmailBenfit>
            <s.EmailIcon />
            <s.Desc>Send Email</s.Desc>
          </s.EmailBenfit>
          <s.ChatBenfit>
            <s.ChatIcon />
            <s.Desc>Chat</s.Desc>
          </s.ChatBenfit>
          <s.MobileBenfit>
            <s.MobileIcon />
            <s.Desc>Call / Send SMS</s.Desc>
          </s.MobileBenfit>
        </s.Benefits>
        <s.UpgradeLink href="https://www.shaadi.com/payment?source=listing_banner" target="_blank" isVisible={true}>
          Upgrade Now
        </s.UpgradeLink>
        <s.OtherBenefitsTitle>Other Benefits</s.OtherBenefitsTitle>
        <s.OtherBenefit>
          - View college and professional details<br />
          - Make your profile stand out in search results
        </s.OtherBenefit>
      </s.UpgradeBanner>
    );
};

export default UpgradeBanner;