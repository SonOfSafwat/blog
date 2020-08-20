// @flow strict
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	RedditShareButton,
	RedditIcon,
	PocketShareButton,
	PocketIcon,
	InstapaperShareButton,
	InstapaperIcon,
	EmailShareButton,
	EmailIcon,
} from 'react-share';
import React from 'react';
import styles from './Share.module.scss';

type Props = {
	title: string,
};

const iconSize = 40;
const Share = ({ title }: Props) => {
	const url = typeof window !== 'undefined' ? window.location.href : '';
	return (
		<div className={styles['social-links__list']}>
			<FacebookShareButton
				url={url}
				quote={title}
				className={styles['social-links__list-item']}>
				<FacebookIcon size={iconSize} round />
			</FacebookShareButton>
			<TwitterShareButton
				url={url}
				title={title}
				className={styles['social-links__list-item']}>
				<TwitterIcon size={iconSize} round />
			</TwitterShareButton>
			<LinkedinShareButton
				url={url}
				className={styles['social-links__list-item']}>
				<LinkedinIcon size={iconSize} round />
			</LinkedinShareButton>
			<RedditShareButton
				url={url}
				title={title}
				windowWidth={660}
				windowHeight={460}
				className={styles['social-links__list-item']}>
				<RedditIcon size={iconSize} round />
			</RedditShareButton>
			<EmailShareButton
				url={url}
				subject={title}
				className={styles['social-links__list-item']}>
				<EmailIcon size={iconSize} round />
			</EmailShareButton>
			<PocketShareButton
				url={url}
				title={title}
				className={styles['social-links__list-item']}>
				<PocketIcon size={iconSize} round />
			</PocketShareButton>
			<InstapaperShareButton
				url={url}
				title={title}
				className={styles['social-links__list-item']}>
				<InstapaperIcon size={iconSize} round />
			</InstapaperShareButton>
		</div>
	);
};

export default Share;
