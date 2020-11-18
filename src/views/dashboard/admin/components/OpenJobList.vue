<template>
  <div>
    <div v-for="post in tweets" :key="post" class="list" :post="post">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="post.img" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ post.name }}</strong>
                <small>{{ post.handle }}</small>
                <br>
                {{ post.tweet }}
              </p>
            </div>
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart" /></span>
                <span class="likes">{{ post.likes }}</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchOpenJobList } from '@/api/job'

const tweets = [
  {
    id: 1,
    name: 'James',
    handle: '@jokerjames',
    img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
    tweet: "If you don't succeed, dust yourself off and try again.",
    likes: 10
  },
  {
    id: 2,
    name: 'Fatima',
    handle: '@fantasticfatima',
    img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
    tweet: 'Better late than never but never late is better.',
    likes: 12
  },
  {
    id: 3,
    name: 'Xin',
    handle: '@xeroxin',
    img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
    tweet: 'Beauty in the struggle, ugliness in the success.',
    likes: 18
  }
]

export default {
  name: 'OpenJobList',
  data() {
    return {
      tweets: tweets,
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
    //   this.$vs.loading()
      this.listLoading = true
      fetchOpenJobList(this.listQuery).then(response => {
        this.list = response.data
        // this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.list {
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
}

.box {
  margin-bottom: 0;
  border-radius: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

.media {
  -webkit-box-align: start;
  align-items: flex-start;
  display: flex;
  text-align: left;
}

.media-left {
  margin-right: 1em;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 0;
}

.is-64x64 {
  height: 100px;
  width: 100px;
}
.image {
  display: block;
  position: relative;
  margin: 0;
}

.media-content {
  flex-basis: auto;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  text-align: left;
}

.content small {
  color: #00d1b2;
}

.image img {
  border-radius: 30px;
  display: block;
  height: auto;
  width: 100%;
}

.level-item {
  padding-left: 10px;
  color: #00d1b2;
}

input:focus {
  border-color: #00d1b2;
}

.likes {
  padding: 0 7.5px;
}

input {
  font-weight: bold;
}

.tweets-move {
  transition: transform 1s;
}
</style>
