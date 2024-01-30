/* eslint-disable */
import type { Prisma, Event } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateEvent(
    options?: Omit<UseMutationOptions<Event | undefined, unknown, Prisma.EventCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventCreateArgs, Event, true>(
        'Event',
        'POST',
        `${endpoint}/event/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Event, Prisma.EventGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.EventCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Event, Prisma.EventGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyEvent(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.EventCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventCreateManyArgs, Prisma.BatchPayload, false>(
        'Event',
        'POST',
        `${endpoint}/event/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.EventCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyEvent<T extends Prisma.EventFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.EventFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.EventGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/findMany`, args, options, fetch);
}

export function useInfiniteFindManyEvent<T extends Prisma.EventFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.EventFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.EventGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Event', `${endpoint}/event/findMany`, args, options, fetch);
}

export function useFindUniqueEvent<T extends Prisma.EventFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.EventGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/findUnique`, args, options, fetch);
}

export function useFindFirstEvent<T extends Prisma.EventFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.EventFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.EventGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/findFirst`, args, options, fetch);
}

export function useUpdateEvent(
    options?: Omit<UseMutationOptions<Event | undefined, unknown, Prisma.EventUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventUpdateArgs, Event, true>(
        'Event',
        'PUT',
        `${endpoint}/event/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Event, Prisma.EventGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.EventUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Event, Prisma.EventGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyEvent(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.EventUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventUpdateManyArgs, Prisma.BatchPayload, false>(
        'Event',
        'PUT',
        `${endpoint}/event/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.EventUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertEvent(
    options?: Omit<UseMutationOptions<Event | undefined, unknown, Prisma.EventUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventUpsertArgs, Event, true>(
        'Event',
        'POST',
        `${endpoint}/event/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Event, Prisma.EventGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.EventUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Event, Prisma.EventGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteEvent(
    options?: Omit<UseMutationOptions<Event | undefined, unknown, Prisma.EventDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventDeleteArgs, Event, true>(
        'Event',
        'DELETE',
        `${endpoint}/event/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Event, Prisma.EventGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.EventDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Event, Prisma.EventGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyEvent(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.EventDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.EventDeleteManyArgs, Prisma.BatchPayload, false>(
        'Event',
        'DELETE',
        `${endpoint}/event/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.EventDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EventDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.EventDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateEvent<T extends Prisma.EventAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetEventAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/aggregate`, args, options, fetch);
}

export function useGroupByEvent<
    T extends Prisma.EventGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.EventGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.EventGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.EventGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.EventGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.EventGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.EventGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.EventGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/groupBy`, args, options, fetch);
}

export function useCountEvent<T extends Prisma.EventCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.EventCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EventCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Event', `${endpoint}/event/count`, args, options, fetch);
}
