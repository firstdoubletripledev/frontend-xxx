import React from 'react';
import Layout from '../../components/Layout';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay } from 'swiper';


import './Home.scss';
import { BsArrowUp, BsArrowDown, BsChevronDown, BsChevronCompactUp, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";

const Home = () => {
	return <Layout className="home" >
		<section className='exchange-section' style={{ background: "url('/assets/images/home/home-first-section.png')", backgroundSize: 'cover' }} >
			<div className='container pb2 pt2'>
				<div className='row justify'>
					<div className='col-sm-12 col-md-12 col-lg-6 mt2'>
						<h1 className=''>
							Use Flash Transfer service to <span className='primary-color'>send</span>, <span className='primary-color'>buy</span> or <span className='primary-color'></span>sell your crypto for <span className='primary-color'>cash worldwide</span> in the world.
						</h1>
						<p className='gray-color'>
							Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using a Binance account or using your no-custodial wallet ( Flash wallet, Metamask, Binance wallet, Trust wallet ...)
						</p>
						<div className='dis-f ai-c gap10 mt1'>
							<button className='btn black-bg white-color'>Get started</button>
							<button className='btn transparent-bg pb0 pt0'>
								<img className="" width='100%' height='40px' src='/assets/images/trustpilot.png' alt='' />
							</button>
						</div>
					</div>
					<div className='col-sm-12 col-md-12 col-lg-6 mt2'>
						<div className='exchange-container w9 tab-w10'>
							<div className='exchange-box tc'>
								<p className='black-color bold'>
									Connected Wallet
								</p>
								<div className='justify gap10'>
									<img src="/assets/images/tokens/bnb-b.png" width="30px" height="30px" alt="" />
									<h2 className=''>BINANCE</h2>
								</div>
							</div>

							<div className='exchange-box mt2 justify-s'>
								<div className=''>
									<div className='bold'>Amount Send</div>
									<div>
										<input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
									</div>
								</div>
								<div className=''>
									<div className='pink-box'>
										<div className='justify gap10'>
											<img className='' width={'48px'} height={'48px'} src="/assets/images/tokens/busd.png" alt="" />
											<div>BUSD</div>
										</div>
										<div className='justify'>
											<BsChevronDown fontSize={'16px'} />
										</div>
									</div>
								</div>
							</div>

							<div className='mt2 mb2 dis-f ac-c jc-e gap20'>
								<div className="justify po-re">
									<BsArrowUp className='po-ab' style={{ left: '-7px' }} fontSize={'23px'} />
									<BsArrowDown className='po-ab' style={{ right: '-6px' }} fontSize={'23px'} />
								</div>
								<div className=''>
									1 <span style={{ color: '#F9AA4B' }}>BUSD</span> = 1 EUR
								</div>
							</div>

							<div className='exchange-box mt2 justify-s'>
								<div className='dis-f fd-c jc-sb h10'>
									<div className='bold'>Received Amount</div>
									<div>
										<input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
									</div>
								</div>
								<div className=''>
									<div className='pink-box'>
										<div className='justify gap10'>
											<img className='' width={'48px'} height={'48px'} src="/assets/images/flags/france.png" alt="" />
											<div>Euro</div>
										</div>
										<div className='justify'>
											<BsChevronDown fontSize={'16px'} />
										</div>
									</div>
								</div>
							</div>

							<div className='mt2'>
								<div className='justify-s'>
									<div className='grey-color'>Fee</div>
									<div className=''>+2.50 EUR</div>
								</div>
							</div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='grey-color'>Transfer Time</div>
									<div className=''>1 Min</div>
								</div>
							</div>
							<div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='purple-color'>Total to pay</div>
									<div className=''>102.50 BUSD</div>
								</div>
							</div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='purple-color'>Recipient Gets</div>
									<div className=''>100.00 EUR</div>
								</div>
							</div>
							<div className='mt2 justify'>
								<button className='btn black-bg white-color w10'>
									Continue
								</button>
							</div>
							<div className='mt2 justify'>
								<button className='btn transparent-bg w10 grey-border'>
									Cancel
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

		<section className='partners res-pt6 res-pb6'>
			<div className='container tc'>
				<h1 className='white-color bold'>Choose from our trusted partners</h1>
				<p className='white-color mt3'>We make sure your money is delivered quickly and easily. Choose from our network of trusted banks, cash pickup locations or mobile money.</p>
				<div className='desktop-partners-padding mt3'>
					<div className='justify-s gap10 tab-fd-c'>
						<div className='justify-s fd-c gap10 flex4 mo-w10 '>
							<div className='justify-s w10 gap10 mo-fd-c'>
								<div className='justify-s w10 gap10'>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/binance.png" alt="" />
									</div>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/coinbase.png" alt="" />
									</div>
								</div>
								<div className='justify-s w10 gap10'>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/orange.png" alt="" />
									</div>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/metamask.png" alt="" />
									</div>
								</div>
							</div>
							<div className='justify-s w10 gap10 mo-fd-c'>
								<div className='justify-s w10 gap10'>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/google-wallet.png" alt="" />
									</div>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/apple.png" alt="" />
									</div>
								</div>
								<div className='justify-s w10 gap10'>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/ramp.png" alt="" />
									</div>
									<div className='partners-box'>
										<img className='h10 w10' src="/assets/images/payments/visa.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className='dis-f fd-c flex1 gap10 tab-fd-r tab-w-10'>
							<div className='partners-box'>
								<img className='h10 w10' src="/assets/images/payments/trust.png" alt="" />
							</div>
							<div className='partners-box'>
								<img className='h10 w10' src="/assets/images/payments/mastercard.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className='counter res-pt7' style={{ background: "url('/assets/images/home/counter.png')", backgroundSize: 'cover' }}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-md-4 tc'>
						<h1 className=''>+200</h1>
						<div className='mt2'>
							<h4 className='purple-color'>Fiat Currencies Support</h4>
						</div>
						<div className='mt1 grey-color'>We support all Fiat currencies in the world!</div>
					</div>
					<div className='col-sm-12 col-md-4 tc'>
						<h1 className=''>6</h1>
						<div className='mt2'>
							<h4 className='purple-color'>Popular cryptocurrencies available !</h4>
						</div>
						<div className='mt1 grey-color'>You can exchange your cryptocurrencies: BUSD, BNB, BITCOIN, MATIC, ETHEREUM and FLASH</div>
					</div>
					<div className='col-sm-12 col-md-4 tc'>
						<h1 className=''>5k</h1>
						<div className='mt2'>
							<h4 className='purple-color'>Active Users</h4>
						</div>
						<div className='mt1 grey-color'>Our users are satisfied with the speed, low fees and support !</div>
					</div>
				</div>
			</div>
			<div className='normal-bg pt2 pb2'></div>
		</section>

		<section className='choose res-pt7 res-pb7'>
			<div className='container'>
				<div className='w10 tc'>
					<h1 className='white-color'>Why Choose Us</h1>
					<h5 className='white-color pt2'>Send & Receive money to your loved ones in minutes with great rates and low fees.</h5>
					<h5 className='white-color'>Over 180 countries and 30 currencies supported.</h5>
				</div>
				<div className='mt1'>
					<div className='row'>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='choose-box'>
								<div className='choose-img-center'>
									<div className='choose-iconbox'>
										<img src="/assets/images/icons/counter.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Speed</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='choose-box'>
								<div className='choose-img-center'>
									<div className='choose-iconbox'>
										<img src="/assets/images/icons/six-angle.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Security</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='choose-box'>
								<div className='choose-img-center'>
									<div className='choose-iconbox'>
										<img src="/assets/images/icons/loop.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Easy Transfer</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* img layout */}
				<div className=''>
					{/* top five images */}
					<div className=''>
						<img className='po-ab' style={{ opacity: '0.4', left: '10%', top: '10px' }} src="/assets/images/vector/target.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '15%', top: '70px' }} src="/assets/images/vector/target.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '20%', top: '60px' }} src="/assets/images/vector/plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '10%', top: '120px' }} src="/assets/images/vector/big-plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '22%', top: '100px' }} src="/assets/images/vector/wallet.png" alt="" />
					</div>
					{/* bottom three images */}
					<div className=''>
						<img className='po-ab' style={{ opacity: '0.4', right: '4%', bottom: '100px' }} src="/assets/images/vector/plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '7%', bottom: '20px' }} src="/assets/images/vector/big-plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '2%', bottom: '40px' }} src="/assets/images/vector/wallet.png" alt="" />
					</div>
				</div>
			</div>
		</section>

		<section className='main-futures res-pt6 res-pb6'>
			<div className='container'>
				<div className='row ai-c'>
					<div className='col-sm-12 col-md-6'>
						<h1 className='bold'>
							Fast, <span className='grey-color'>Secure</span>
						</h1>
						<h1 className=''>
							Money Transfers
						</h1>
						<div className='dis-f gap20 mt1'>
							<div className='main-futures-box'>
								<img className='' src="/assets/images/icons/team.png" alt="" />
							</div>
							<div className=''>
								<h4 className='bold'>First Advantage</h4>
								<p className='grey-color'>Ac tincidunt sapien vehicula erat auctor <br />
									pellentesque rhoncus. Et magna sit morbi <br /> lobortis.</p>
							</div>
						</div>
						<div className='dis-f gap20 mt1'>
							<div className='main-futures-box'>
								<img className='' src="/assets/images/icons/clock.png" alt="" />
							</div>
							<div className=''>
								<h4 className='bold'>Second Advantage</h4>
								<p className='grey-color'>Ac tincidunt sapien vehicula erat auctor <br />
									pellentesque rhoncus. Et magna sit morbi <br /> lobortis.</p>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-6 dis-f jc-e'>
						<img className='' style={{ borderRadius: '15px', width: '85%' }} src="/assets/images/home/transfer.png" alt="" />
					</div>
				</div>
			</div>
		</section>

		<section className='steps res-pt7 res-pb5 normal-bg'>
			<div className='container'>
				<div className='w10 tc'>
					<h4 className='purple-color'>How it works?</h4>
					<h1 className=''>Just few steps to start</h1>
					<h5 className=' pt2'>Its easiest as you think.Follow 3 easiest step</h5>
				</div>
				<div className='mt1'>
					<div className='row'>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='steps-box'>
								<div className='steps-img-center'>
									<div className='steps-iconbox'>
										<img src="/assets/images/icons/counter-yellow.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Register for free</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='steps-box'>
								<div className='steps-img-center'>
									<div className='steps-iconbox'>
										<img src="/assets/images/icons/six-angle-yellow.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Connect your crypto wallet</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-4 mt3'>
							<div className='steps-box'>
								<div className='steps-img-center'>
									<div className='steps-iconbox'>
										<img src="/assets/images/icons/loop-yellow.png" alt="" />
									</div>
								</div>
								<div className='mt3 black-color bold'>Make payment</div>
								<div className='mt3 gray-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* img layout */}
				<div className=''>
					{/* top three images */}
					<div className=''>
						<img className='po-ab' style={{ opacity: '0.4', left: '0', top: '0px', zIndex: 1 }} src="/assets/images/home/steps/outside-circle.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '0%', top: '0px', zIndex: 2 }} src="/assets/images/home/steps/inside-circle.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', left: '10%', top: '80px', zIndex: 3 }} src="/assets/images/home/steps/big-wallet.png" alt="" />
					</div>
					{/* top right three images */}
					<div className=''>
						<img className='po-ab' style={{ opacity: '0.4', right: '4%', top: '30px' }} src="/assets/images/vector/steps/plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '7%', top: '100px' }} src="/assets/images/home/steps/yellow-plan.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '2%', top: '40px' }} src="/assets/images/home/steps/wallet.png" alt="" />
					</div>
					{/* bottom three images */}
					<div className=''>
						<img className='po-ab' style={{ opacity: '0.4', right: '0', bottom: '0px', zIndex: 1 }} src="/assets/images/home/steps/outside-circle.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '0%', bottom: '-20px', zIndex: 2 }} src="/assets/images/home/steps/inside-circle.png" alt="" />
						<img className='po-ab' style={{ opacity: '0.4', right: '0%', bottom: '-40px', zIndex: 3 }} src="/assets/images/home/steps/outside-circle.png" alt="" />
					</div>
				</div>
			</div>
		</section>

		<section className='store res-pt5 res-pb5 overflow-h'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<h1 className=''>World First Fast & <span className='purple-color'>Secure</span> way to send Crepto to Fat anywhere in the world</h1>
						<p className='mt3 grey-color'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
						<div className='p2'></div>
						<div className='mt6 dis-f gap20'>
							<button className='btn black-bg justify gap20'>
								<SiApple color='white' fontSize={'18px'} />
								<div className='white-color'>Apple Store</div>
							</button>
							<button className='btn black-bg justify gap20'>
								<RiGooglePlayFill color='white' fontSize={'18px'} />
								<div className='white-color'>Play Store</div>
							</button>
						</div>
					</div>
					<div className='col-sm-12 col-md-6'>
						<div className='dis-f ai-e'>
							<img className='w5' src="/assets/images/home/small-p.png" alt="" />
							<img className='w5' src="/assets/images/home/big-p.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className='FAQ res-pt6 res-pb6'>
			<div className='container'>
				<div className='tc'>
					<h1 className='bold primary-color'>Frequently asked questions</h1>
				</div>
				<div className='row mt3 tc'>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>What's the best thing about Switzerland?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>How do you make holy water?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>Why do you never see elephants hiding in trees?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>What do you call someone with no body and no nose?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>Why can't you hear a pterodactyl go to the bathroom?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4'>
						<div className='white-color'>Why did the invisible man turn down the job offer?</div>
						<p className='mt1 grey-color'>
							Ac tincidunt sapien vehicula erat auctor
							<br />
							pellentesque rhoncus. Et magna sit morbi lobortis.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section className='trustpilot res-pt6 res-pb6 normal-bg'>
			<div className='container'>
				<div className='dis-f fd-c tc'>
					<img className='mauto' style={{ maxWidth: '280px', width: '100%' }} src="/assets/images/Trustpilot_2.png" alt="" />
					<p className='mt2 bold'>
						Our reviews verified by Trustpilot
					</p>
					<h2 className='mt2'>What our customers says</h2>
					<p style={{ fontSize: '16px' }} className='grey-color'>Happy Users</p>
				</div>
				<div className='mt2 justify-s w10'>
					<Swiper
						spaceBetween={50}
						slidesPerView={3}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							"@0.00": {
								slidesPerView: 1,
								spaceBetween: 0,
							},
							"@0.5": {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 40,
							},
						}}
						modules={[Autoplay]}
						rewind={true}
						style={{ width: '100%', display: 'flex' }}

					>
						<SwiperSlide>
							<div className='customer-card'>
								<p className='grey-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</p>
								<div>
									<img src="/assets/images/avatar/Avatar1.png" width={'40px'} height={'40px'} alt="" />
								</div>
								<div className='justify gap10'>
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
								</div>
								<div className='mt1'>
									<h5 className='bold'>Bertram Jensen</h5>
									<p className='grey-color'>Author at Panoply Store</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='customer-card'>
								<p className='grey-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</p>
								<div>
									<img src="/assets/images/avatar/Avatar1.png" width={'40px'} height={'40px'} alt="" />
								</div>
								<div className='justify gap10'>
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
								</div>
								<div className='mt1'>
									<h5 className='bold'>Bertram Jensen</h5>
									<p className='grey-color'>Author at Panoply Store</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='customer-card'>
								<p className='grey-color'>
									Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</p>
								<div>
									<img src="/assets/images/avatar/Avatar1.png" width={'40px'} height={'40px'} alt="" />
								</div>
								<div className='justify gap10'>
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
									<RiStarSFill color='#9DAFBD' fontSize={'17px'} />
								</div>
								<div className='mt1'>
									<h5 className='bold'>Bertram Jensen</h5>
									<p className='grey-color'>Author at Panoply Store</p>
								</div>
							</div>
						</SwiperSlide>

					</Swiper>

				</div>
				<div className='justify mt6 gap20'>
					<button className='btn-arrow-white'>
						<BsChevronLeft fontSize={'20px'} className='grey-color' />
					</button>
					<button className='btn-arrow-black'>
						<BsChevronRight fontSize={'20px'} className='white-color' />
					</button>
				</div>
			</div>
		</section>
	</Layout>;
};

export default Home;