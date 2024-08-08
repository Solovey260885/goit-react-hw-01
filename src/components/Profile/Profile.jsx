import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img src={image} alt={name} className={css.img} />
        <p className={css.titleName}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.titlleEl}>Followers </span>
          <span className={css.counter}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.titlleEl}>Views </span>
          <span className={css.counter}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.titlleEl}>Likes </span>
          <span className={css.counter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
