import PropTypes from 'prop-types';
import React from 'react';
import s from './styles';

const UpgradeBannerStatic = props => {
    return (
      <s.UpgradeBanner>
        <s.Header>
          <s.Title>Connect with Matches directly</s.Title>
          <s.CloseBtn />
        </s.Header>
        <s.Benefits>
          <s.Benfit name="email">
            <s.Icon name="email" />
            <s.Desc>Send Email</s.Desc>
          </s.Benfit>
          <s.Benfit name="chat">
            <s.Icon name="chat" />
            <s.Desc>Chat</s.Desc>
          </s.Benfit>
          <s.Benfit name="mobile">
            <s.Icon name="mobile" />
            <s.Desc>Call / Send SMS</s.Desc>
          </s.Benfit>
        </s.Benefits>
        <s.UpgradeLink href="https://www.shaadi.com/payment?source=listing_banner" target="_blank">
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

export default UpgradeBannerStatic;