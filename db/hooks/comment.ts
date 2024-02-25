/* eslint-disable */
import type { Prisma, Comment } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateComment(
    options?: Omit<UseMutationOptions<Comment | undefined, unknown, Prisma.CommentCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentCreateArgs, Comment, true>(
        'Comment',
        'POST',
        `${endpoint}/comment/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Comment, Prisma.CommentGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CommentCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Comment, Prisma.CommentGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyComment(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CommentCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentCreateManyArgs, Prisma.BatchPayload, false>(
        'Comment',
        'POST',
        `${endpoint}/comment/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CommentCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyComment<T extends Prisma.CommentFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CommentFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.CommentGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/findMany`, args, options, fetch);
}

export function useInfiniteFindManyComment<T extends Prisma.CommentFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CommentFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.CommentGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Comment', `${endpoint}/comment/findMany`, args, options, fetch);
}

export function useFindUniqueComment<T extends Prisma.CommentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.CommentGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/findUnique`, args, options, fetch);
}

export function useFindFirstComment<T extends Prisma.CommentFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CommentFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.CommentGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/findFirst`, args, options, fetch);
}

export function useUpdateComment(
    options?: Omit<UseMutationOptions<Comment | undefined, unknown, Prisma.CommentUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentUpdateArgs, Comment, true>(
        'Comment',
        'PUT',
        `${endpoint}/comment/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Comment, Prisma.CommentGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CommentUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Comment, Prisma.CommentGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyComment(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CommentUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentUpdateManyArgs, Prisma.BatchPayload, false>(
        'Comment',
        'PUT',
        `${endpoint}/comment/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CommentUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertComment(
    options?: Omit<UseMutationOptions<Comment | undefined, unknown, Prisma.CommentUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentUpsertArgs, Comment, true>(
        'Comment',
        'POST',
        `${endpoint}/comment/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Comment, Prisma.CommentGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CommentUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Comment, Prisma.CommentGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteComment(
    options?: Omit<UseMutationOptions<Comment | undefined, unknown, Prisma.CommentDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentDeleteArgs, Comment, true>(
        'Comment',
        'DELETE',
        `${endpoint}/comment/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Comment, Prisma.CommentGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CommentDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Comment, Prisma.CommentGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyComment(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CommentDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CommentDeleteManyArgs, Prisma.BatchPayload, false>(
        'Comment',
        'DELETE',
        `${endpoint}/comment/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CommentDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CommentDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CommentDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateComment<T extends Prisma.CommentAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommentAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetCommentAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/aggregate`, args, options, fetch);
}

export function useGroupByComment<
    T extends Prisma.CommentGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CommentGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CommentGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CommentGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.CommentGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.CommentGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.CommentGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.CommentGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/groupBy`, args, options, fetch);
}

export function useCountComment<T extends Prisma.CommentCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CommentCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CommentCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Comment', `${endpoint}/comment/count`, args, options, fetch);
}
