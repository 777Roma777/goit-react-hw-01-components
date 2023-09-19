import css from './statistic.module.css';

export const Statistics = ({ title, stats }) => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(item => {
          return (
            <li
              style={{ backgroundColor: `${getRandomColor()}` }}
              className={css.item}
              key={item.id} 
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
