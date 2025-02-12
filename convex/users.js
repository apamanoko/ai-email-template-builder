import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string(),
    },
    handler:async(ctx,args)=>{
        // 既存ユーザーの確認
        const user = await ctx.db.query('users')
            .filter((q)=>q.eq(q.field('email'),args.email))
            .collect();  // 結果を配列として取得
        
        // 新規ユーザーの場合
        if(user?.length == 0) {
            const result = await ctx.db.insert('users', {
                name:args.name,
                email:args.email,
                picture:args.picture,
                credits:3,  // 初期クレジット
            })
            return result;
        }
        
        // 既存ユーザーの場合
        return user[0];
    }
})