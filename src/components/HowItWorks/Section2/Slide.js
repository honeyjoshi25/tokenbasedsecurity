import './Section2.css'
import img_product_step1 from '../../../assets/images/img/img_product_step1.png'
import img_register from '../../../assets/images/img/Register.JPG'
import img_product_step2 from '../../../assets/images/img/img_product_step2.png'
import img_explore from '../../../assets/images/img/Explore.JPG'
import img_product_step3 from '../../../assets/images/img/img_product_step3.png'
import img_invest from '../../../assets/images/img/Invest.JPG'

export const Slide = [
  {
    id: 1,
    logoimg: img_register,
    header: 'Request invite to get onboard.',
    span: 'Check Eligibility >',
    subHeader: 'Provide information for KYC verification',
    img: img_product_step1,
    num: 1,
    title: 'Register',
  },
  {
    id: 2,
    logoimg: img_explore,
    header: 'View Terazo’s platform for high-quality private market offerings.',

    img: img_product_step2,
    num: 2,
    title: 'Explore',
  },
  {
    id: 3,
    logoimg: img_invest,
    header:
      'Manage your investments on our dashboard, receive income and enjoy flexibility to sell your tokens on our P2P marketplace',

    img: img_product_step3,
    num: 3,
    title: 'Invest & Trades',
  },
]
