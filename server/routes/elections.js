var express = require('express');
var router = express.Router();

/* GET elections. */
router.get('/local-council', function(req, res, next) {
  res.json({
    positions: [
      {
        title: 'Co-chair',
        slug: 'co-chair',
        candidates: []
      },
      {
        title: 'Vice Chair',
        slug: 'vice-chair',
        candidates: []
      },
      {
        title: 'Treasurer',
        slug: 'treasurer',
        candidates: []
      },
      {
        title: 'Secretary',
        slug: 'secretary',
        candidates: [
          {
            name: 'Benjamin Fife',
            imageUrl: 'http://drbenjaminfife.com/images/portrait_@2X.jpg',
            involvement: "Affogato iceland green juice, migas tousled af etsy disrupt pitchfork polaroid hot chicken vegan. Post-ironic scenester celiac dreamcatcher raw denim jianbing. Vexillologist vice jianbing, taxidermy glossier tousled brooklyn succulents. Stumptown everyday carry lo-fi snackwave. Gastropub synth affogato, photo booth fanny pack af before they sold out semiotics tousled blue bottle put a bird on it PBR&B vaporware mustache. Sustainable cray kickstarter viral tacos, twee small batch 90's offal live-edge disrupt. Tbh 3 wolf moon farm-to-table, distillery ramps shoreditch roof party selvage tote bag. Actually tacos seitan hoodie knausgaard",
            qualifications: "Man bun single-origin coffee church-key pabst brunch shoreditch. Lomo trust fund cronut celiac tote bag umami deep v. 3 wolf moon bespoke woke mumblecore. Four loko 90's heirloom, VHS offal meditation dreamcatcher fam YOLO banh mi neutra tattooed deep v air plant. Letterpress cronut trust fund, bitters disrupt tousled bushwick thundercats swag tote bag jianbing roof party four dollar toast fingerstache cornhole. Celiac flexitarian tbh, bicycle rights wayfarers ennui kitsch chambray microdosing. Vegan bespoke hot chicken pug. Literally letterpress kombucha before they sold out, chia wayfarers thundercats unicorn small batch 3 wolf moon",
            goals: "Put a bird on it fashion axe XOXO. Sartorial letterpress irony, man bun meggings echo park flexitarian skateboard. Vegan ennui polaroid subway tile meggings edison bulb. Kombucha godard tacos sriracha, street art lo-fi farm-to-table yuccie woke typewriter echo park man bun humblebrag. 3 wolf moon pork belly craft beer authentic truffaut readymade. Chia franzen letterpress disrupt beard, vinyl paleo wayfarers marfa post-ironic kickstarter tote bag occupy. Chartreuse pabst tousled slow-carb dreamcatcher cliche brooklyn salvia. Affogato williamsburg salvia, stumptown fashion axe cliche blue bottle mlkshk raw denim vexillologist marfa selfies.",
            nominiation1Name: '',
            nominiation1Text: '',
            nominiation2Name: '',
            nominiation2Text: '',
            nominiation3Name: '',
            nominiation3Text: '',
            nominiation4Name: '',
            nominiation4Text: '',
            nominiation5Name: '',
            nominiation5Text: ''
          }
        ]
      },
      {
        title: 'Internal Organizer',
        slug: 'internal-organizer',
        candidates: []
      },
      {
        title: 'External Organizer',
        slug: 'external-organizer',
        candidates: []
      },
      {
        title: 'At-Large',
        slug: 'at-large',
        candidates: []
      }
    ]
  });
});

router.get('/national-convention', function(req, res, next) {
  res.json({
    candidates: [
      {
        name: 'Benjamin Fife',
        text: '',
        nominiationName: '',
      }
    ]
  });
});

module.exports = router;

// Affogato iceland green juice, migas tousled af etsy disrupt pitchfork polaroid hot chicken vegan. Post-ironic scenester celiac dreamcatcher raw denim jianbing. Vexillologist vice jianbing, taxidermy glossier tousled brooklyn succulents. Stumptown everyday carry lo-fi snackwave. Gastropub synth affogato, photo booth fanny pack af before they sold out semiotics tousled blue bottle put a bird on it PBR&B vaporware mustache. Sustainable cray kickstarter viral tacos, twee small batch 90's offal live-edge disrupt. Tbh 3 wolf moon farm-to-table, distillery ramps shoreditch roof party selvage tote bag. Actually tacos seitan hoodie knausgaard
// Man bun single-origin coffee church-key pabst brunch shoreditch. Lomo trust fund cronut celiac tote bag umami deep v. 3 wolf moon bespoke woke mumblecore. Four loko 90's heirloom, VHS offal meditation dreamcatcher fam YOLO banh mi neutra tattooed deep v air plant. Letterpress cronut trust fund, bitters disrupt tousled bushwick thundercats swag tote bag jianbing roof party four dollar toast fingerstache cornhole. Celiac flexitarian tbh, bicycle rights wayfarers ennui kitsch chambray microdosing. Vegan bespoke hot chicken pug. Literally letterpress kombucha before they sold out, chia wayfarers thundercats unicorn small batch 3 wolf moon
// Put a bird on it fashion axe XOXO. Sartorial letterpress irony, man bun meggings echo park flexitarian skateboard. Vegan ennui polaroid subway tile meggings edison bulb. Kombucha godard tacos sriracha, street art lo-fi farm-to-table yuccie woke typewriter echo park man bun humblebrag. 3 wolf moon pork belly craft beer authentic truffaut readymade. Chia franzen letterpress disrupt beard, vinyl paleo wayfarers marfa post-ironic kickstarter tote bag occupy. Chartreuse pabst tousled slow-carb dreamcatcher cliche brooklyn salvia. Affogato williamsburg salvia, stumptown fashion axe cliche blue bottle mlkshk raw denim vexillologist marfa selfies.
// Chia umami readymade food truck fashion axe. Kombucha bicycle rights fap tumblr tumeric, scenester pickled. Everyday carry stumptown hexagon, forage hashtag art party enamel pin. Schlitz glossier cliche franzen, hashtag crucifix mixtape austin PBR&B salvia art party copper mug meh fashion axe. Umami green juice etsy pok pok synth. Air plant church-key selvage, fanny pack green juice ethical raw denim irony pork belly hella flexitarian lomo.
