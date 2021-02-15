import styles from './Sub.module.scss';
import portrait from '../../../assets/imgs/portrait-desat.jpg';

export default function Sub() {
	return (
		<section id={styles.Sub}>
			<div>
				<header>
					<h3>
						<span>01</span> who I am
					</h3>
					<div className={styles.subheader}>
						<h4>Quan Cao</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
							quod sapiente, molestias vitae voluptate minus doloribus suscipit atque
							maiores dolorem laboriosam, mollitia repellendus libero officiis
							cupiditate eveniet quisquam. Ea blanditiis non unde molestias et.
							Debitis dolorum similique, mollitia delectus quidem iusto ea laborum,
							quasi sapiente error eius? Maxime, voluptate?
						</p>
					</div>
				</header>
				<img src={portrait} alt='' />
			</div>
		</section>
	);
}
