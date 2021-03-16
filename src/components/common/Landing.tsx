import { AnimatePresence, motion } from 'framer-motion';
import { transitions } from './Landing.transitions';
import styles from './Landing.module.scss';
import CTAContainer from './CTAContainer';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import React from 'react';
import { viewportType } from './../hooks/useViewport';

interface LandingProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	img: { src: string; alt: string };
	headerText: string;
	subheaderText: string;
	whiteImg?: boolean;
	ctaText?: string;
	ctaAction?: (...args: any[]) => any;
	noBoxShadow?: boolean;
	viewport?: viewportType;
}

export default function Landing({
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	img,
	headerText,
	subheaderText,
	whiteImg,
	ctaText,
	ctaAction,
	noBoxShadow,
	viewport,
}: LandingProps) {
	if ([...subheaderText].length > 190) {
		throw new Error(
			`Prop subheaderText has too many characters. Max allotted characters is 190. Current character amount is ${
				[...subheaderText].length
			}`
		);
	}

	//=== Data handler for copying text ===//
	const hiddenInputRef = useRef<HTMLInputElement | null>(null);
	const [inputCopied, setInputCopied] = useState<boolean>(false);
	//====================================//
	//=== Find substring and create a copy-click event + styles ===/
	function copySubString(str: string, substr: string) {
		return str.split(/(\s+)/).map((word) => {
			return word === substr ? (
				<React.Fragment key={word}>
					<strong
						onClick={() => {
							hiddenInputRef.current?.select();
							document.execCommand('copy');
							setInputCopied(true);
							if (viewport && viewport.rank < 2) {
								setTimeout(() => {
									//fallback in the case that onMouseEvent fires even above viewport.rank 2
									if (inputCopied) {
										setInputCopied(false);
									}
								}, 2000);
							}
						}}
						onMouseOut={() => {
							setInputCopied(false);
						}}
					>
						<div className={styles.popup} data-input-copied={inputCopied}>
							{inputCopied ? 'copied to clipboard!' : 'copy to clipboard'}
						</div>
						{word}
					</strong>
					<input
						className={styles.hidden}
						ref={hiddenInputRef}
						type='text'
						value={word}
						readOnly
					/>
				</React.Fragment>
			) : (
				word
			);
		});
	}
	//=============================================================/

	return (
		<section className={styles.landing}>
			<motion.div
				className={`${styles.imgContainer} ${isSubpathOpen && styles.subpathOpen}`}
				variants={transitions.img}
				data-no-box-shadow={noBoxShadow}
			>
				<motion.div
					variants={transitions.bracket}
					id={styles.top}
					className={styles.bracket}
				/>
				<img src={img.src} alt={img.alt} />
				<motion.div
					className={styles.bar}
					variants={transitions.bar}
					data-img-white={whiteImg}
				/>
				<motion.div
					variants={transitions.bracket}
					id={styles.bottom}
					className={styles.bracket}
				/>
			</motion.div>
			<AnimatePresence exitBeforeEnter>
				<motion.header
					key='header'
					animate='animate'
					initial='initial'
					exit='exit'
					variants={transitions.stagger}
				>
					<motion.h1 variants={transitions.headerChildren}>{headerText}</motion.h1>
					<motion.h2 variants={transitions.headerChildren}>
						{copySubString(subheaderText, 'qcao.digital@gmail.com')}
					</motion.h2>
					<CTAContainer
						isSubpathOpen={isSubpathOpen}
						setIsSubpathOpen={setIsSubpathOpen}
						transitions={transitions}
						sectionRef={sectionRef}
						ctaText={ctaText}
						ctaAction={ctaAction}
					/>
				</motion.header>
			</AnimatePresence>
			<AnimatePresence exitBeforeEnter>
				{isSubpathOpen && (
					<motion.div
						animate='animate'
						initial='initial'
						exit='exit'
						className={styles.scrollCTA}
						variants={transitions.scrollCTA}
					>
						<p>scrolldown</p>
						<div className={styles.line}></div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
