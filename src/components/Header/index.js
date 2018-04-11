import React, { Component } from 'react';
// import { Tooltip, Popover } from 'antd';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './index.less';

export default class Index extends Component {
  /* constructor(props) {
        super(props)
    } */

  isIe = !!window.ActiveXObject || 'ActiveXObject' in window;
  /* 
    versionContent() {
        return (
            <div className={styles.versionContent}>
                <div className={styles.floor}>
                    <p>该版本进行了以下功能升级/优化：</p>
                    <ul>
                        <li>新增银行小额鉴权，确保企业用户真实性</li>
                        <li>调优了用户操作的引导</li>
                        <li>优化订单流程以支持拼单业务</li>
                        <li>优化资金中心以符合财务的操作要求</li>
                        <li>支持苏宁易付宝支付</li>
                        <li>修正网站错误</li>
                    </ul>
                </div>
            </div>
        )
    } */

  render() {
    return (
      <div className={styles.header} id="header" style={this.props.style}>
        {/* <div className={styles.headerTop}>
          <div className={styles.container}>
            <div className={styles.toLeft}>客服热线：400-990-1619</div>
            <div className={styles.toRight}>
              {' '}
              <Link to="/about-us">关于蜂巢里</Link>
              <Link to="/newbie">新手指南</Link>
              <Link to="/join/job">加入我们</Link>
            </div>
          </div>
        </div> */}
        <div className={styles.headerNav}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="图片" />
                {/* <svg className="iconfont logo-slogen" ariaHidden="true">
                                    <use xlinkHref="#icon-LOGO"></use>
                                </svg> */}
              </Link>
            </div>
            <ul className={styles.link}>
              <li className={styles.navLink}>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/industrialFinance">产业金融</Link>
              </li>
              <li>
                <Link to="/trade">物流金融</Link>
              </li>
              <li>
                <Link to="/supplyChain">供应链服务</Link>
              </li>
              <li>
                <Link to="/qualityCertification">质检认证</Link>
              </li>
              <li>
                <a href="http://wind.fengchaoli.com/">产业资讯</a>
              </li>
            </ul>
          </div>
        </div>
        {this.isIe && <iframe title="标题" src="about:blank" className="compatibleIE" />}
      </div>
    );
  }
}

// <li className="nav-link">
// <Link to={'/purchasing'}>拼单采购</Link>
// </li>
