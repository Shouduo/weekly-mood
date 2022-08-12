import Mock from 'mockjs';

Mock.mock('/mood', 'get', {
  code: 0,
  msg: 'success',
  payload: {
    'list|7': [{
      'id|+1': 0,
      timestamp: function() {
        return new Date().getTime() - (this as any).id * 86400 * 1000;
      },
      score: function() {
        if ((this as any).id === 4) return 0;
        else return Mock.Random.natural(70, 100);
      }
    }]
  }
});

export default Mock;