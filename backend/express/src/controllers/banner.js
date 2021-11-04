const createError = require('http-errors');
const BannerService = require('../services/banner');
const FileService = require('../services/file');

const BannerController = {
  getOpenBanners: async (req, res) => {
    const banners = await BannerService.findAllOpen();

    return res.status(200).json({ data: banners });
  },

  getBanners: async (req, res) => {
    const banners = await BannerService.findAll();

    return res.status(200).json({ data: banners });
  },

  createBanner: async (req, res, next) => {
    const data = req.body;
    const file = req.file;
    const { title } = data;
    if (!title) return next(createError(400, 'title is required'));
    if (!file) return next(createError(400, 'image is required'));

    const filename = await FileService.addImage(file);
    const result = await BannerService.add({ ...data, imageUrl: `${process.env.IMAGE_URL}/${filename}` });

    if (!result || !result.id) return next(createError(500));

    return res.status(201).json({ success: true, bannerId: result.id });
  },

  updateBanner: async (req, res, next) => {
    const { id, ...rest } = req.body;
    const file = req.file;

    if (!id) return next(createError(400, 'id is required'));
    let imageUrl;
    if (file) {
      const filename = await FileService.addImage(file);
      imageUrl = `${process.env.IMAGE_URL}/${filename}`;
    }
    BannerService.update(id, { ...rest, imageUrl });

    return res.status(200).json({ success: true });
  },

  deleteBanner: async (req, res, next) => {
    const { id } = req.params;

    const deleted = await BannerService.delete(id);
    if (!deleted) return next(createError(404, 'banner not exists'));

    return res.status(200).json({ success: true });
  },
};

module.exports = BannerController;
