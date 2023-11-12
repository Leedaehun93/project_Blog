/* C:\Work\100_project_Blog\01_iPortfolio\frontend-typescript\src\pages\Home.tsx */
import React, { useEffect } from 'react';
import initMain from '../assets/js/main.js';

export default function Home() {
    // TODO:  함수 정의
    // 함수 호출
    // useEffect 훅 컴포넌트가 렌더링 될 때마다 실행
    // 매개 변수가 비어 있기 때문에 처음 마운트 될 때만 실행됨
    useEffect(() => {
        initMain();
    }, []);

    return (
        // TODO: JSX
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header">
                <div className="d-flex flex-column">
                    {/* 프로필(main) */}
                    <div className="profile">
                        {/* <img src="assets/img/Ivan.jpg" alt="" className="img-fluid rounded-circle"/> */}
                        <img
                            src={require('../assets/img/Ivan.jpg')}
                            alt=""
                            className="img-fluid rounded-circle"
                        />
                        <h1 className="text-light">
                            <a href="index.html">이 대훈</a>
                        </h1>
                        <div className="social-links mt-3 text-center">
                            {/* 현재창에서 url 로 이동 예시 */}
                            {/* <a href="https://github.com/Leedaehun93" className="github"><i className="bi bi-github"></i></a> */}
                            {/* 새창에서 url 로 이동 */}
                            <a
                                href="https://github.com/Leedaehun93"
                                target="_blank">
                                <i className="bi bi-github"></i>
                            </a>
                            <a
                                href="https://soaked.tistory.com/"
                                target="_blank">
                                <i className="bi ivan-i-tistory"></i>
                            </a>
                            <a
                                href="https://www.notion.so/8e6419e205ba4e908d952f18a101c212"
                                target="_blank">
                                <i className="bi ivan-i-notion"></i>
                            </a>

                            <a
                                href="https://www.notion.so/8e6419e205ba4e908d952f18a101c212"
                                target="_blank">
                                <i className="bi ivan-i-naver"></i>
                            </a>

                            <a
                                href="https://www.notion.so/8e6419e205ba4e908d952f18a101c212"
                                target="_blank">
                                <i className="bi ivan-i-github"></i>
                            </a>
                        </div>
                    </div>

                    <nav
                        id="navbar"
                        className="nav-menu navbar">
                        <ul>
                            <li>
                                <a
                                    href="#hero"
                                    className="nav-link scrollto active">
                                    <i className="bx bx-home"></i> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="nav-link scrollto">
                                    <i className="bx bx-user"></i> <span>개인정보</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="nav-link scrollto">
                                    <i className="bx bx-file-blank"></i> <span>보유기술</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="nav-link scrollto">
                                    <i className="bx bx-book-content"></i> <span>포트폴리오</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="nav-link scrollto">
                                    <i className="bx bx-envelope"></i> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
            </header>
            {/* <!-- End Header --> */}

            {/* <!-- ======= Hero Section : Home ======= --> */}
            <section
                id="hero"
                className="d-flex flex-column justify-content-center align-items-center">
                <div
                    className="hero-container"
                    data-aos="fade-in">
                    <h1>웹 개발 지원자_</h1>
                    <h1>이대훈</h1>
                    <p>
                        I'm
                        <span
                            className="typed"
                            data-typed-items="_생각하는 웹 개발자"></span>
                    </p>
                </div>
            </section>
            {/* <!-- End Home --> */}

            <main id="main">
                {/* <!-- ======= About Section : Introduce | 자기소개 ======= --> */}
                <section
                    id="about"
                    className="about">
                    <div className="container">
                        {/* Introduce | 자기소개 상단 시작 */}
                        <div className="container">
                            <div className="section-title">
                                <h2>Introduce | 자기소개</h2>
                                {/* <h3>UI/UX Designer &amp; Web Developer.</h3> */}
                                {/* <h3>지원분야: 웹 개발자(신입) &amp; Web Developer.</h3> */}
                                <p className="fst-italic">
                                    <strong>신중한 편이지만 도전과 변화를 피하지 않습니다.</strong>
                                    <br />
                                    <strong>열정을 기울일 준비가 되어있습니다.</strong>
                                </p>
                            </div>

                            {/* TODO: 옆으로 [ 개인정보 ] [ 직장 경력 ] [ IT 관련 경력 ] [ 학력 ] [*/}
                            <div className="row">
                                <div className="col-lg-3 pt-2 pt-lg-0 content">
                                    <h3 className="Introduce-title1">[ 개인정보 ]</h3>
                                </div>
                                <div className="col-lg-5 pt-2 pt-lg-0 content">
                                    <h3 className="Introduce-title2">[ 직장 경력 ]</h3>
                                </div>
                                <div className="col-lg-4 pt-2 pt-lg-0 content">
                                    <h3 className="Introduce-title3">
                                        [ IT 관련 경력 ] /<br />[ 학력 ]
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* Introduce | 자기소개 상단 끝 */}

                        {/* Introduce | 자기소개 상단 본문 시작 */}
                        <div className="row">
                            <div
                                className="col-lg-3 pt-2 pt-lg-0 content"
                                data-aos="fade-left"
                                style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                {/* 개인정보 시작 */}
                                <div
                                    className="col-lg-7 pt-2 pt-lg-0 content"
                                    data-aos="fade-left"
                                    style={{ width: '100%' }}>
                                    <img
                                        src={require('../assets/img/2022_증명사진 (1).jpg')}
                                        className="img-fluid"
                                        alt=""
                                        style={{ width: '75%', marginBottom: '20px' }}
                                    />
                                </div>
                                <div
                                    className="col-lg-12 pt-2 pt-lg-0"
                                    data-aos="fade-left">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>성 명:</strong> <span>이 대 훈</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>생년월일:</strong> <span>1993.10.08 (만 30세)</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>전화번호:</strong> <span>+82 010 5490 0400</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>dzdzz93@naver.com</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i> <strong>거주지:</strong> <span>부산광역시 해운대구</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 개인정보 끝 */}

                            {/* TODO: 직장 경력 시작 */}
                            <div
                                className="col-lg-5 pt-2 pt-lg-2 content"
                                data-aos="fade-left">
                                <section
                                    id="Introduce"
                                    className="Introduce">
                                    <div className="container">
                                        <div
                                            className="col-lg-10"
                                            data-aos="fade-up"
                                            data-aos-delay="100">
                                            <div className="Introduce-item">
                                                <h4>㈜다나무 부산지사</h4>
                                                <h5>2019.02 - 2023.07</h5>
                                                <p> - 가구 및 파라솔 전시장 응대 및 제안 영업</p>
                                                <p> - B2B 신규 거래처 발굴, 기존 거래처 영업 관리</p>
                                                <p> - ERP(이카운트) 재고관리 및 견적 작성</p>
                                            </div>
                                            <div className="Introduce-item">
                                                <h4>유니테크(주)</h4>
                                                <h5>2016.03 - 2018.08</h5>
                                                <p> - KT 무선국 전파 개설 신고(주파수 할당)</p>
                                                <p> - 준공 검사 관련 DB 관리</p>
                                            </div>
                                            <div className="Introduce-item">
                                                <h4>㈜KNT</h4>
                                                <p> - 자동화 및 배전반 전력 감시 제어 판넬 및 시퀀스 회로 설계</p>
                                                <p> - 자재 및 BOM 관리</p>
                                                <h5>2013.03 - 2015.09</h5>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* 직장 경력 끝 */}

                            {/* IT 관련 경력 및 학력 시작 */}
                            <div
                                className="col-lg-4 pt-2 pt-lg-2 content"
                                data-aos="fade-left">
                                <section
                                    id="Introduce"
                                    className="Introduce">
                                    <div className="container">
                                        <div
                                            className="col-lg-10"
                                            data-aos="fade-up"
                                            data-aos-delay="100">
                                            <div className="Introduce-item">
                                                <h4>자바(JAVA)기반 웹 & 데이터 융합개발자</h4>
                                                <h4> (스프링, 오라클)양성과정 교육 수료</h4>
                                                <h5>2023.07 - 2023.12</h5>
                                            </div>

                                            <div className="Introduce-item">
                                                <h4>동주대학교 크루즈해양인테리어학과</h4>
                                                <h4> 중퇴</h4>
                                                <h5>2012.03 - 2013.02</h5>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* IT 관련 경력 및 학력 끝 */}
                        </div>
                        {/* Introduce | 자기소개 상단 본문 끝 */}
                    </div>
                </section>

                {/*     <!-- ======= Skills Section ======= --> */}
                <section
                    id="skills"
                    className="skills section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>Skills</h2>
                            <p>1. 다양한 기기의 융합, 네트워크의 융합, 콘텐츠의 융합을 통한 4차 산업시대에 걸맞는 새로운 형태의 융합 서비스를 창출하기 위한 능력 함양.</p>
                            <p>2. 디지털 환경이 요구하는 업무 영역 및 운영 환경에 맞는 소프트웨어를 설계, 구현, 테스트를 수행하고, 융합하여 서비스를 개선하는 업무능력 함양.</p>
                            <p>3. 관계형데이터베이스에서 SQL을 사용하여 응용 SW의 기능에 적합한 데이터를 정의하고, 조작하며, 제어하는 능력을 함양.</p>
                            <p>4. 자바(Java)를 활용하여 객체지향 프로그래밍 능력을 함양하고 공통모듈을 구현 및 통합하여 웹 애플리케이션을 개발 능력 함양.</p>
                            <p>5. 애플리케이션 프레임워크 및 DB 프레임워크를 적용하여 애플리케이션을 최적화, 네트워크를 융합한 웹 애플리케이션을 개발, 배포하는 능력 함양.</p>
                            <p>6. 공공데이터포털에서 제공하는 오픈 API 활용 방법을 숙지하고 공공데이터를 활용하여 웹 및 모바일 웹 서비스를 기획, 설계, 제작, 테스트하는 능력 함양.</p>
                        </div>

                        <div className="row skills-content">
                            <div
                                className="col-lg-6"
                                data-aos="fade-up">
                                <div className="progress">
                                    <span className="skill">
                                        HTML <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">
                                        CSS <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">
                                        Java Script <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-6"
                                data-aos="fade-up"
                                data-aos-delay={100}>
                                <div className="progress">
                                    <span className="skill">
                                        JAVA <i className="val">80%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">
                                        Node.js <i className="val">70%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill">
                                        Oracle <i className="val">70%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Skills Section --> */}

                {/* <!-- ======= Portfolio Section ======= --> */}
                <section
                    id="portfolio"
                    className="portfolio section-bg">
                    <div className="container">
                        <div className="section-title"></div>

                        <div
                            className="row"
                            data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li
                                        data-filter="*"
                                        className="filter-active">
                                        All
                                    </li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="row portfolio-container"
                            data-aos="fade-up"
                            data-aos-delay="100">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-1.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="App 1">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-2.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-2.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Web 3">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-3.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-3.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="App 2">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-4.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-4.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Card 2">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-5.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-5.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Web 2">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-6.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-6.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="App 3">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-7.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-7.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Card 1">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-8.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-8.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Card 3">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img
                                        src="assets/img/portfolio/portfolio-9.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-9.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox"
                                            title="Web 3">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Portfolio Section --> */}

                {/* <!-- ======= Contact Section ======= --> */}
                <section
                    id="contact"
                    className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>방문해 주셔서 감사합니다.</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>

                        <div
                            className="row"
                            data-aos="fade-in">
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>

                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                        frameBorder={0}
                                        style={{ border: 0, width: 100 + '%', height: 290 + 'px' }}
                                        allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form
                                    action="forms/contact.php"
                                    method="post"
                                    role="form"
                                    className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={10}
                                            required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Contact Section --> */}
            </main>
            {/* <!-- End #main --> */}

            {/*   <!-- ======= Footer ======= --> */}
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright
                        <strong>
                            <span>iPortfolio</span>
                        </strong>
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. --> */}
                        {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                        {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                        {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
            {/* <!-- End  Footer --> */}
        </>
    );
}
