/* eslint-disable */
import type { Prisma, Bookmark } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateBookmark(
    options?: Omit<UseMutationOptions<Bookmark | undefined, unknown, Prisma.BookmarkCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkCreateArgs, Bookmark, true>(
        'Bookmark',
        'POST',
        `${endpoint}/bookmark/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BookmarkCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyBookmark(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BookmarkCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkCreateManyArgs, Prisma.BatchPayload, false>(
        'Bookmark',
        'POST',
        `${endpoint}/bookmark/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.BookmarkCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyBookmark<T extends Prisma.BookmarkFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BookmarkFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.BookmarkGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/findMany`, args, options, fetch);
}

export function useInfiniteFindManyBookmark<T extends Prisma.BookmarkFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BookmarkFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.BookmarkGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Bookmark', `${endpoint}/bookmark/findMany`, args, options, fetch);
}

export function useFindUniqueBookmark<T extends Prisma.BookmarkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookmarkFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.BookmarkGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/findUnique`, args, options, fetch);
}

export function useFindFirstBookmark<T extends Prisma.BookmarkFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BookmarkFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.BookmarkGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/findFirst`, args, options, fetch);
}

export function useUpdateBookmark(
    options?: Omit<UseMutationOptions<Bookmark | undefined, unknown, Prisma.BookmarkUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkUpdateArgs, Bookmark, true>(
        'Bookmark',
        'PUT',
        `${endpoint}/bookmark/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BookmarkUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyBookmark(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BookmarkUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkUpdateManyArgs, Prisma.BatchPayload, false>(
        'Bookmark',
        'PUT',
        `${endpoint}/bookmark/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.BookmarkUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertBookmark(
    options?: Omit<UseMutationOptions<Bookmark | undefined, unknown, Prisma.BookmarkUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkUpsertArgs, Bookmark, true>(
        'Bookmark',
        'POST',
        `${endpoint}/bookmark/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BookmarkUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteBookmark(
    options?: Omit<UseMutationOptions<Bookmark | undefined, unknown, Prisma.BookmarkDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkDeleteArgs, Bookmark, true>(
        'Bookmark',
        'DELETE',
        `${endpoint}/bookmark/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.BookmarkDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Bookmark, Prisma.BookmarkGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyBookmark(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.BookmarkDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.BookmarkDeleteManyArgs, Prisma.BatchPayload, false>(
        'Bookmark',
        'DELETE',
        `${endpoint}/bookmark/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.BookmarkDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.BookmarkDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.BookmarkDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateBookmark<T extends Prisma.BookmarkAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookmarkAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetBookmarkAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/aggregate`, args, options, fetch);
}

export function useGroupByBookmark<
    T extends Prisma.BookmarkGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.BookmarkGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.BookmarkGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.BookmarkGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.BookmarkGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.BookmarkGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.BookmarkGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/groupBy`, args, options, fetch);
}

export function useCountBookmark<T extends Prisma.BookmarkCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.BookmarkCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BookmarkCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Bookmark', `${endpoint}/bookmark/count`, args, options, fetch);
}
