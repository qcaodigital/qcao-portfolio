import styles from './PageNumber.module.scss';

interface PageNumberProps {
	currentPathIdx: number;
	className?: string;
}

export default function PageNumber({ currentPathIdx, className: extraClasses }: PageNumberProps) {
	return <div className={`${styles.pageNumber} ${extraClasses}`}>0{currentPathIdx}</div>;
}
