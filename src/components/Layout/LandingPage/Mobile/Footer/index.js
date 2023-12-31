// styled
import {
  StyledFooter,
  StyledContainer,
  StyledBLock,
  StyledTextCustom,
  StyledH2,
  StyledOfficeAddress,
  StyledListSocial,
  StyledOther,
  StyledPrivacyPolicy,
  StyledImage,
} from './styled';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { IMAGE_CONST } from '@app/utils/images';
import { OFFICE_LIST, SOCIAL_LIST } from '@app/utils/constant';
import Router from 'next/router';

const Footer = () => (
    <StyledFooter className="footer">
      <StyledContainer className="container">
        <Row gutter={53}>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <StyledBLock>
              <StyledTextCustom fontSize="16px" fontWeight="400" color="#101717">
                Ready to bring your ideas to life?
              </StyledTextCustom>
              <StyledH2 onClick={() => Router.push('/contact')}>
                Now is always the right time to start!
              </StyledH2>
            </StyledBLock>
            <StyledBLock>
              <Row gutter={[0, 16]}>
                {
                  OFFICE_LIST.map((item, idx) => (
                    <Col span={24} key={idx}>
                      <StyledOfficeAddress>
                        <StyledTextCustom fontSize="16px" fontWeight="400" color="#91A8A7">
                          {item.office}
                        </StyledTextCustom>
                        <StyledTextCustom fontSize="20px" fontWeight="400" color="#101717">
                          {item.address}
                        </StyledTextCustom>
                      </StyledOfficeAddress>
                    </Col>
                  ))
                }
              </Row>
            </StyledBLock>
            <StyledBLock>
              <StyledListSocial>
                {
                  SOCIAL_LIST.map((item, idx) => (
                    <Image
                      src={item.icon}
                      alt={item.key}
                      key={idx}
                      width={32}
                      height={32}
                      onClick={() => window.open(item.url, '_blank')}
                    />
                  ))
                }
              </StyledListSocial>
              <StyledOther>
                <StyledTextCustom fontSize="18px" fontWeight="400" color="#708E8C">
                  Copyright © 2023 Saola
                </StyledTextCustom>
                <StyledPrivacyPolicy href={'/privacy-policy'}>
                  Privacy Policy
                </StyledPrivacyPolicy>
              </StyledOther>
            </StyledBLock>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6} xl={6}>
            <StyledImage
              src={IMAGE_CONST.layout.imageFooter}
              alt="footer"
              width={332}
              height={332}
              onClick={() => window.open(item.url, '_blank')}
            />
          </Col>
        </Row>
      </StyledContainer>
    </StyledFooter>
);

export default Footer;
