import {List,Item,Span} from '../styled/List'

const Statistics = ({stats}) => {
    return (<section>
    <List >
   {stats.map(dat =>(<Item key={dat.id}>
  <Span>{ dat.label}</Span>
  <Span>{ dat.percentage}</Span>
    </Item>))
    }
  </List>
</section>
    );
}

export default Statistics;