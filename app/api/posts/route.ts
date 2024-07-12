import { type NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const category = searchParams.get('category')
    const search = searchParams.get('search') || ''
    const sort = searchParams.get('sort') || 'desc'
  
    const whereCondition = category
      ? {
          category: {
            is: {
                name: category
            }, //ORM ช่วยทำให้ search ข้าม table ได้ด้วย is และ ถามหา name category ได้เลย โดยสิ่งนี้มันเชื่อมกับSchemaที่ประกาศไว้แต่แรก
          },
          title: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        }
  
    try {
      const posts = await prisma.post.findMany({
        where: whereCondition as any,
        include: {
          category: true, // Include category data in the response
        },
        orderBy: {
          createdAt: sort as any,
        },
      })
      return Response.json(posts)
    } catch (error) {
      return new Response(error as BodyInit, {
        status: 500,
      })
    }
  }

export async function POST(req: Request) {
    try {
        const { title, content, categoryId } = await req.json()
    
        // Check if categoryId exists in database
        const existingCategory = await prisma.category.findUnique({
          where: { id: categoryId },
        })
    
        if (!existingCategory) {
          return new Response('Category not found', { status: 404 })
        }
    
        // Create new post with categoryId
        const newPost = await prisma.post.create({
          data: {
            title,
            content,
            categoryId,
          },
          include: {
            category: true, // Include category data in the response
          },
        })
    
        return Response.json(newPost)
      } catch (error) {
        return new Response(error as BodyInit, {
          status: 500,
        })
      }
}