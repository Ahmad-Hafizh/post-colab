-- CreateTable
CREATE TABLE "posts" (
    "post_id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
