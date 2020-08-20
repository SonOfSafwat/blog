// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import { getContactHref } from '../../../utils';
import { useSiteMetadata } from '../../../hooks';

type Props = {
	date: string,
};

const Meta = ({ date }: Props) => {
	const { author } = useSiteMetadata();
	return (
		<div className={styles['meta']}>
			<p className={styles['meta__date']}>
				Published {moment(date).format('D MMM YYYY')} By&nbsp;
				<a
					className={styles['meta__date-twitter']}
					href={getContactHref('twitter', author.contacts.twitter)}
					rel='noopener noreferrer'
					target='_blank'>
					<strong>{author.name}</strong>
				</a>
			</p>
		</div>
	);
};

export default Meta;
