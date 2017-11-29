import styled from 'styled-components';

const styles = {};

styles.UpgradeBanner = styled.div`
  position: relative;
  border: solid 2px #dfe0e3;
  padding-top: 16px;
  text-align: center;
  background: #fff;
  width: 730px;
  margin: 20px auto 0;
`;

styles.Header = styled.div``;

styles.Title = styled.h4`
  font-size: 20px;
  margin: 0;
  color: #72727d;
  font-weight: normal;
`;

styles.CloseBtn = styled.button`
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 20px;
  height: 15px;
  width: 15px;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent url(/assets/big-close-v2.png) no-repeat left -207px;

  &:hover {
    background-position: left -231px;
  }
`;

styles.Benefits = styled.div`margin: 28px 0 19px;`;

styles.EmailBenfit = styled.div`
  display: inline-block;
  padding: 0 34px 0 60px;
`;

styles.EmailIcon = styled.div`
  height: 32px;
  width: 80px;
  margin-bottom: 17px;
  background: url(https://img2.shaadi.com/community/images/search-bann-sprite.png) no-repeat 20px top;
`;

styles.ChatBenfit = styled.div`
  display: inline-block;
  padding: 0 40px 0 41px;
  background: url(https://img2.shaadi.com/community/images/search-bann-border.gif) no-repeat left center;
`;

styles.ChatIcon = styled.div`
  height: 42px;
  width: 42px;
  margin-bottom: 17px;
  background: url(https://img2.shaadi.com/community/images/search-bann-sprite.png) no-repeat left -38px;
`;

styles.MobileBenfit = styled.div`
  display: inline-block;
  padding: 0 36px 0 37px;
  background: url(https://img2.shaadi.com/community/images/search-bann-border.gif) no-repeat left center;
`;

styles.MobileIcon = styled.div`
  height: 39px;
  width: 80px;
  margin-bottom: 17px;
  background: url(https://img2.shaadi.com/community/images/search-bann-sprite.png) no-repeat 40px -87px;
`;

styles.Desc = styled.div`
  font-size: 16px;
  color: #72727d;
`;

styles.UpgradeLink = styled.a`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 18px auto 0;
  width: 140px;
  color: #fff;
  background: #00bcd5;
  border: 1px solid #00bcd5;
  border-radius: 3px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #0194a8;
    border: 1px solid #0194a8;
  }
`;

styles.OtherBenefitsTitle = styled.div`
  font-size: 16px;
  color: #72727d;
  line-height: 24px;
  margin: 12px 0 0;
`;

styles.OtherBenefit = styled.div`
  font-size: 14px;
  color: #72727d;
  line-height: 18px;
  padding: 0 0 12px;
`;

export default styles;