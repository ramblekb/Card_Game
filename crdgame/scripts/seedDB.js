const mongoose = require("mongoose");
const db = require("../models");

// This file empties the cards collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const cardSeed = [
  {
    name: "One",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
    color: "green",
    cost: 5,
    damage: "8",
    date: new Date(Date.now())
  },
  {
    name: "Two",
    img: "https://en.es-static.us/upl/2019/09/jupiter-juno-2-12-2019-e1567611570663.jpg",
    color: "green",
    cost: 4,
    damage: "6",
    date: new Date(Date.now())
  },

  {
    name: "Three",
    img: "https://cdn.mos.cms.futurecdn.net/6f96opossGxtomxQKqZpqh-1024-80.jpg",
    color: "green",
    cost: 3,
    damage: "4",
    date: new Date(Date.now())
  },  {
    name: "Four",
    img: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg",
    color: "green",
    cost: 2,
    damage: "3",
    date: new Date(Date.now())
  },  {
    name: "Five",
    img: "https://i.pinimg.com/originals/30/24/54/3024546a0ba34cc3126b5beb1ebc1628.jpg",
    color: "green",
    cost: 1,
    damage: "2",
    date: new Date(Date.now())
  },  {
    name: "Six",
    img: "https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/milkywayas_hdv.jpg?itok=wdGe0-DL",
    color: "green",
    cost: 0,
    damage: "1",
    date: new Date(Date.now())
  },  {
    name: "Seven",
    img: "https://img.jakpost.net/c/2018/11/26/2018_11_26_59340_1543200787._large.jpg",
    color: "green",
    cost: 5,
    damage: "8",
    date: new Date(Date.now())
  },  {
    name: "Eight",
    img: "https://i.pinimg.com/originals/62/7c/be/627cbea7e2029fb64d12b2c1d40578d7.jpg",
    color: "green",
    cost: 4,
    damage: "6",
    date: new Date(Date.now())
  },  {
    name: "Nine",
    img: "https://www.eurekalert.org/multimedia/pub/web/192731_web.jpg",
    color: "green",
    cost: 3,
    damage: "4",
    date: new Date(Date.now())
  },  {
    name: "Ten",
    img: "https://localtvwqad.files.wordpress.com/2019/03/nasa-tess-discoveries-include-best-places-for-life.jpg?quality=85&strip=all&w=400&h=225&crop=1",
    color: "green",
    cost: 2,
    damage: "3",
    date: new Date(Date.now())
  },  {
    name: "Eleven",
    img: "https://assets.change.org/photos/3/dy/dk/gZDYdkwmLlRjOFb-800x450-noPad.jpg?1526584164",
    color: "green",
    cost: 1,
    damage: "2",
    date: new Date(Date.now())
  },  {
    name: "Twelve",
    img: "http://www.spitzer.caltech.edu/uploaded_files/graphics/high_definition_graphics/0011/3556/ssc2018-04_Rec.jpg?1518573671",
    color: "green",
    cost: 0,
    damage: "1",
    date: new Date(Date.now())
  },  {
    name: "Thirteen",
    img: "https://sm.mashable.com/t/mashable_in/image/p/pluto-is-a/pluto-is-a-planet-again-sorta_8fbf.910.jpg",
    color: "green",
    cost: 5,
    damage: "8",
    date: new Date(Date.now())
  },  {
    name: "Fourteen",
    img: "https://www.irishtimes.com/polopoly_fs/1.3762055.1547763475!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
    color: "green",
    cost: 4,
    damage: "6",
    date: new Date(Date.now())
  },  {
    name: "Fifteen",
    img: "https://i2.wp.com/blurredculture.com/wp-content/uploads/2019/01/NASA.jpg?resize=1200%2C675",
    color: "green",
    cost: 3,
    damage: "4",
    date: new Date(Date.now())
  },  {
    name: "Sixteen",
    img: "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2019/09/48746523921_ca72385730_k.jpg",
    color: "green",
    cost: 2,
    damage: "3",
    date: new Date(Date.now())
  },  {
    name: "Seventeen",
    img: "https://news.images.itv.com/image/file/1939192/stream_img.jpg",
    color: "green",
    cost: 1,
    damage: "2",
    date: new Date(Date.now())
  },  {
    name: "Eighteen",
    img: "https://live.staticflickr.com/2868/9265051556_979691fb65_b.jpg",
    color: "green",
    cost: 0,
    damage: "1",
    date: new Date(Date.now())
  },
  {
    name: "Gila Monster",
    img: "https://thoughtcatalog.files.wordpress.com/2018/10/nativeamericansymbols-gilamonster.jpg?resize=2000,1333&quality=95&strip=all&crop=1",
    color: "green",
    cost: 0,
    damage: "1",
    date: new Date(Date.now())
  },


];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
