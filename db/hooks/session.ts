/* eslint-disable */
import type { Prisma, Session } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateSession(
    options?: Omit<UseMutationOptions<Session | undefined, unknown, Prisma.SessionCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionCreateArgs, Session, true>(
        'Session',
        'POST',
        `${endpoint}/session/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Session, Prisma.SessionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SessionCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Session, Prisma.SessionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManySession(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SessionCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionCreateManyArgs, Prisma.BatchPayload, false>(
        'Session',
        'POST',
        `${endpoint}/session/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SessionCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySession<T extends Prisma.SessionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.SessionGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/findMany`, args, options, fetch);
}

export function useInfiniteFindManySession<T extends Prisma.SessionFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.SessionGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Session', `${endpoint}/session/findMany`, args, options, fetch);
}

export function useFindUniqueSession<T extends Prisma.SessionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.SessionGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/findUnique`, args, options, fetch);
}

export function useFindFirstSession<T extends Prisma.SessionFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.SessionGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/findFirst`, args, options, fetch);
}

export function useUpdateSession(
    options?: Omit<UseMutationOptions<Session | undefined, unknown, Prisma.SessionUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionUpdateArgs, Session, true>(
        'Session',
        'PUT',
        `${endpoint}/session/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Session, Prisma.SessionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Session, Prisma.SessionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManySession(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SessionUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionUpdateManyArgs, Prisma.BatchPayload, false>(
        'Session',
        'PUT',
        `${endpoint}/session/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSession(
    options?: Omit<UseMutationOptions<Session | undefined, unknown, Prisma.SessionUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionUpsertArgs, Session, true>(
        'Session',
        'POST',
        `${endpoint}/session/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Session, Prisma.SessionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Session, Prisma.SessionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteSession(
    options?: Omit<UseMutationOptions<Session | undefined, unknown, Prisma.SessionDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionDeleteArgs, Session, true>(
        'Session',
        'DELETE',
        `${endpoint}/session/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Session, Prisma.SessionGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Session, Prisma.SessionGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManySession(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SessionDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SessionDeleteManyArgs, Prisma.BatchPayload, false>(
        'Session',
        'DELETE',
        `${endpoint}/session/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.SessionDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSession<T extends Prisma.SessionAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SessionAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetSessionAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/aggregate`, args, options, fetch);
}

export function useGroupBySession<
    T extends Prisma.SessionGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.SessionGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.SessionGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/groupBy`, args, options, fetch);
}

export function useCountSession<T extends Prisma.SessionCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SessionCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Session', `${endpoint}/session/count`, args, options, fetch);
}
