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
      // score: '@integer(0, 100)',
      // 'score|0-100': 5,
      score: function() {
        if ((this as any).id === 4) return 0;
        // if (this.index === 0) return 100;
        // if (this.index === 1) return 10;
        // if (this.index === 2) return 20;
        // if (this.index === 3) return 30;
        else return Mock.Random.natural(70, 100);
      }
    }]
  }
});

export default Mock;