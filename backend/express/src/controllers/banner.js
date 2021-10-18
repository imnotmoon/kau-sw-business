const BannerService = require('../services/banner');

const BannerController = {
  get: async (req, res) => {
    const banners = await BannerService.findOpenBanners();

    return res.status(200).json({ data: banners });
  },
};

module.exports = BannerController;
