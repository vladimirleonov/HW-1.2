import {Request, Response} from 'express'
import {HTTP_CODES} from "../../settings"
import {blogRepository} from '../repository/blogRepository'
import {OutputBlogType} from '../../input-output-types/blog-types'

export const getBlogsController = async (req: Request, res: Response<OutputBlogType[]>) => {
    const foundInfo = await blogRepository.find()
    if (!foundInfo.blogs) {
        res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send()
        return
    }

    res.status(HTTP_CODES.OK).send(foundInfo.blogs)
}